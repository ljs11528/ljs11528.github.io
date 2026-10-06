// Refresh the English HTML snapshot after editing script.js. No dependencies required.
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { copy, renderSections, escapeHtml } = require('./script.js');
const file = new URL('./index.html', import.meta.url);
let html = readFileSync(file, 'utf8');
for (const [name, markup] of Object.entries(renderSections('en'))) {
  const start = '<!-- ' + name + ':start -->';
  const end = '<!-- ' + name + ':end -->';
  if (!html.includes(start) || !html.includes(end)) throw new Error('Missing HTML markers: ' + name);
  html = html.replace(new RegExp(start + '[\\s\\S]*?' + end), start + '\n' + markup + '\n' + end);
}
html = html.replace(/(<([a-z0-9]+)[^>]*data-copy="([^"]+)"[^>]*>)[\s\S]*?(<\/\2>)/g,
  (match, opening, tag, key, closing) => {
    if (!(key in copy.en)) throw new Error('Unknown copy key: ' + key);
    return opening + escapeHtml(copy.en[key]) + closing;
  });
html = html.replace(/(<meta name="description" content=")[^"]*(")/, '$1' + escapeHtml(copy.en['profile.bio']) + '$2');
writeFileSync(file, html);
console.log('English HTML snapshot updated.');
