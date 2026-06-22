const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules', 'freeport-async', 'index.js');

if (!fs.existsSync(target)) {
  process.exit(0);
}

const source = fs.readFileSync(target, 'utf8');

if (source.includes('const listenOptions = hostname == null')) {
  process.exit(0);
}

const before = '    server.listen({ port: port, host: hostname }, function(err) {';
const after = [
  '    const listenOptions = hostname == null ? { port: port } : { port: port, host: hostname };',
  '    server.listen(listenOptions, function(err) {'
].join('\n');

if (!source.includes(before)) {
  console.warn('freeport-async patch skipped: expected listen call not found.');
  process.exit(0);
}

fs.writeFileSync(target, source.replace(before, after));
console.log('Patched freeport-async for Node 22 host handling.');
