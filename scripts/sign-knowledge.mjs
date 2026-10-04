import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const root=path.resolve(new URL('..',import.meta.url).pathname);
const payloadPath=path.join(root,'data','knowledge.json');
const manifestPath=path.join(root,'backend','data','manifest.json');
const examplePath=path.join(root,'data','update-manifest.example.json');
const privateKeyPem=process.env.UPDATE_SIGNING_PRIVATE_KEY_PEM;
if(!privateKeyPem) throw new Error('Falta UPDATE_SIGNING_PRIVATE_KEY_PEM; la clave privada nunca debe guardarse en el repositorio.');
const raw=fs.readFileSync(payloadPath);
const payload=JSON.parse(raw);
const key=crypto.createPrivateKey(privateKeyPem);
const publicKey=crypto.createPublicKey(key).export({type:'spki',format:'der'}).toString('base64');
const signature=crypto.sign('sha256',raw,{key,dsaEncoding:'ieee-p1363'}).toString('base64');
const sha256=crypto.createHash('sha256').update(raw).digest('hex');
for(const file of [manifestPath,examplePath]){
 const m=JSON.parse(fs.readFileSync(file,'utf8'));
 m.version=payload.knowledgeVersion;
 m.sha256=sha256;
 m.signatureAlgorithm='ECDSA-P256-SHA256';
 m.signingKeyId='desinzi-update-2026';
 m.signature=signature;
 m.publicKeySpkiBase64=publicKey;
 fs.writeFileSync(file,JSON.stringify(m,null,2)+'\n');
}
console.log(JSON.stringify({version:payload.knowledgeVersion,sha256,signatureAlgorithm:'ECDSA-P256-SHA256',signingKeyId:'desinzi-update-2026'},null,2));
