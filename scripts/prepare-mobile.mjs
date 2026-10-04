import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'www');
const files = ['index.html','app.js','styles.css','manifest.webmanifest','sw.js'];
const dirs = ['assets','data'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of files) fs.copyFileSync(path.join(root, file), path.join(out, file));
for (const dir of dirs) fs.cpSync(path.join(root, dir), path.join(out, dir), { recursive: true });
// A native shell must never bundle backend secrets or backend runtime files.
fs.writeFileSync(path.join(out, 'mobile-build.json'), JSON.stringify({
  appId: 'com.desinzi.zerohumo',
  appVersion: JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version,
  source: 'DESINZI V55 web release',
  generatedAt: new Date().toISOString(),
  backendBundled: false
}, null, 2)+'\n');
console.log(`Mobile web bundle prepared: ${path.relative(root,out)}`);
