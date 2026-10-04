import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const dataDir=path.resolve(process.env.DATA_DIR||path.join(__dirname,"data"));
const port=Number(process.env.PORT||8787);
const adminToken=process.env.ADMIN_TOKEN||"";
const maxBody=64*1024;
const corsOrigins=new Set(String(process.env.CORS_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean));
const rate=new Map();
const send=(req,res,status,body,type="application/json; charset=utf-8")=>{const origin=String(req.headers.origin||'');const headers={"Content-Type":type,"Cache-Control":"no-store","X-Content-Type-Options":"nosniff","X-Frame-Options":"DENY","Referrer-Policy":"no-referrer","Content-Security-Policy":"default-src 'none'; frame-ancestors 'none'"};if(origin&&corsOrigins.has(origin)){headers['Access-Control-Allow-Origin']=origin;headers['Vary']='Origin';}res.writeHead(status,headers);res.end(typeof body==='string'?body:JSON.stringify(body));};
const readJson=n=>JSON.parse(fs.readFileSync(path.join(dataDir,n),"utf8"));
const writeJson=(n,v)=>fs.writeFileSync(path.join(dataDir,n),JSON.stringify(v,null,2)+"\n","utf8");
const ip=req=>{const forwarded=process.env.TRUST_PROXY==='1'?String(req.headers['x-forwarded-for']||''):'';return (forwarded||req.socket.remoteAddress||'unknown').split(',')[0].trim()};
const allowed=req=>{const k=ip(req),now=Date.now();for(const [key,value] of rate){if(now-value.t>120000)rate.delete(key)}const x=rate.get(k)||{t:now,n:0};if(now-x.t>60000){x.t=now;x.n=0}x.n++;rate.set(k,x);return x.n<=120};
const auth=req=>{
  if(!adminToken)return false;
  const got=String(req.headers.authorization||"");
  if(!got.startsWith("Bearer "))return false;
  const a=Buffer.from(got.slice(7));
  const b=Buffer.from(adminToken);
  return a.length===b.length&&crypto.timingSafeEqual(a,b);
};
const body=async req=>new Promise((resolve,reject)=>{let s="";req.on("data",c=>{s+=c;if(Buffer.byteLength(s)>maxBody){reject(new Error("too_large"));req.destroy()}});req.on("end",()=>{try{resolve(s?JSON.parse(s):{})}catch{reject(new Error("invalid_json"))}});req.on("error",reject)});
const audit=(action,req,meta={})=>{
  const file=path.join(dataDir,"audit.log");
  // La auditoría no necesita conservar la IP: la minimización evita crear un identificador personal innecesario.
  const row={ts:new Date().toISOString(),action,...meta};
  fs.appendFileSync(file,JSON.stringify(row)+"\n","utf8");
};
const server=http.createServer(async (req,res)=>{
  if(!allowed(req)) return send(req,res,429,{error:"rate_limited"});
  const u=new URL(req.url,`http://${req.headers.host}`);
  if(req.method==='OPTIONS'){const origin=String(req.headers.origin||'');if(origin&&corsOrigins.has(origin)){res.writeHead(204,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'Authorization,Content-Type','Vary':'Origin'});return res.end()}return send(req,res,204,'');}
  try{
    if(req.method==="GET"&&u.pathname==="/v1/health") return send(req,res,200,{ok:true,service:"desinzi-knowledge-api",version:"1.0.0",adminReview:!!adminToken});
    if(req.method==="GET"&&u.pathname==="/v1/knowledge/manifest") return send(req,res,200,readJson("manifest.json"));
    if(req.method==="GET"&&u.pathname==="/v1/knowledge/payload.json"){
      const m=readJson("manifest.json");
      const raw=fs.readFileSync(path.join(dataDir,"payload.json"),"utf8");
      const extra={"X-Knowledge-Version":m.version,"ETag":"\""+m.sha256+"\""};
      const origin=String(req.headers.origin||"");
      if(origin&&corsOrigins.has(origin)){extra["Access-Control-Allow-Origin"]=origin;extra["Vary"]="Origin";}
      res.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff","X-Frame-Options":"DENY","Referrer-Policy":"no-referrer","Content-Security-Policy":"default-src 'none'; frame-ancestors 'none'",...extra});
      return res.end(raw);
    }
    if(req.method==="GET"&&u.pathname==="/v1/knowledge/status"){
      const m=readJson("manifest.json");
      const raw=fs.readFileSync(path.join(dataDir,"payload.json"),"utf8");
      const payload=JSON.parse(raw);
      const sha=crypto.createHash("sha256").update(raw,"utf8").digest("hex");
      const schemaOk=payload.schemaVersion===m.schemaVersion&&payload.knowledgeVersion===m.version&&Array.isArray(payload.sources)&&Array.isArray(payload.rules?.principles)&&payload.ingredients&&typeof payload.ingredients==="object";
      return send(req,res,200,{version:m.version,schemaVersion:m.schemaVersion,declaredSha256:m.sha256,calculatedSha256:sha,integrityOk:sha===m.sha256,schemaOk, payloadVersion:payload.knowledgeVersion,sources:m.sources,generatedAt:m.generatedAt});
    }
    if(req.method==="GET"&&u.pathname==="/v1/sources") return send(req,res,200,readJson("sources.json"));
    if(req.method==="GET"&&u.pathname==="/v1/admin/pending") {if(!auth(req)) return send(req,res,401,{error:"admin_auth_required"});return send(req,res,200,readJson("pending-changes.json"));}
    if(req.method==="POST"&&u.pathname==="/v1/admin/change") {
      if(!auth(req)) return send(req,res,401,{error:"admin_auth_required"});
      const b=await body(req); if(!b.title||!b.kind||!b.summary) return send(req,res,400,{error:"title_kind_summary_required"});
      const pending=readJson("pending-changes.json"); const id=crypto.randomUUID();
      const item={id,title:String(b.title).slice(0,180),kind:String(b.kind).slice(0,60),summary:String(b.summary).slice(0,1000),sources:Array.isArray(b.sources)?b.sources.slice(0,20):[],status:"pending_review",createdAt:new Date().toISOString(),createdBy:String(b.createdBy||"admin").slice(0,80)};
      pending.items.unshift(item); writeJson("pending-changes.json",pending); audit("change_created",req,{changeId:id,kind:item.kind});
      return send(req,res,201,item);
    }
    if(req.method==="POST"&&u.pathname.startsWith("/v1/admin/change/")&&u.pathname.endsWith("/review")) {
      if(!auth(req)) return send(req,res,401,{error:"admin_auth_required"});
      const id=u.pathname.split("/")[4]; const b=await body(req); const decision=b.decision;
      if(!["approved","rejected"].includes(decision)) return send(req,res,400,{error:"invalid_decision"});
      const pending=readJson("pending-changes.json"); const item=pending.items.find(x=>x.id===id); if(!item) return send(req,res,404,{error:"change_not_found"});
      item.status=decision; item.reviewedAt=new Date().toISOString(); item.reviewNote=String(b.note||"").slice(0,1000); item.reviewedBy=String(b.reviewedBy||"admin").slice(0,80);
      writeJson("pending-changes.json",pending); audit("change_reviewed",req,{changeId:id,decision});
      return send(req,res,200,item);
    }
    return send(req,res,404,{error:"not_found"});
  }catch(e){return send(req,res,e.message==="too_large"?413:500,{error:e.message||"server_error"});}
});
server.listen(port,()=>console.log(`DESINZI knowledge API listening on :${port}`));
