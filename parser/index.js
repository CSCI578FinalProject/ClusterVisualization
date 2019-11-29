const fs = require('fs');
const filename = process.argv[2];
const outputName = process.argv[3] || 'cluster';

if (!filename) {
  console.log('filename is required');
  return;
}

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data = data.replace(/[\u0001-\u0006\u0008-\u0009\u000B-\u001A]/g, '');
  const parts = data.split('\n').map(s => s.split(' '));
  const map = {};
  for (let part of parts) {
    const cluster = part[1];
    if (!cluster) {
      continue;
    }
    const element = part[2];
    if (!map[cluster]) {
      map[cluster] = [];
    }
    map[cluster].push(element);
  }

  fs.writeFile(`${outputName}.json`, JSON.stringify(map), err => {
    err && console.log(err);
  });
});
