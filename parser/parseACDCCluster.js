const fs = require('fs');
const uuidv1 = require('uuid/v1');
const filename = process.argv[2];
const outputName = process.argv[3] || 'acdcCluster';

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
  const classMap = {};

  for (let part of parts) {
    const cluster = part[1];
    if (!cluster) {
      continue;
    }
    const element = part[2];
    if (!map[cluster]) {
      map[cluster] = {
        id: uuidv1(),
        cluster: cluster,
        elements: []
      };
    }
    map[cluster].elements.push(element);

    if (!classMap[element]) {
      classMap[element] = cluster;
    }
  }

  const result = {
    clusterMap: map,
    classMap: classMap
  };

  fs.writeFile(`${outputName}.json`, JSON.stringify(result), err => {
    err && console.log(err);
  });
});
