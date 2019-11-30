const fs = require('fs-extra');
const clusterFilename = process.argv[2];
const graphFilename = process.argv[3];
const folderName = process.argv[4] || 'cluster-graph';

const searchNodes = (root, nodes, edges, nodeMap, limit) => {
  let preLevel = [root];
  let nextLevel = [];
  let currLevel = 1;
  while (preLevel.length > 0 && currLevel <= limit) {
    const curr = preLevel.shift();
    const children = Object.keys(nodes[curr].children);
    for (let child of children) {
      // Saves node if not existed
      if (!nodes[child]) {
        nodes[child] = nodeMap[child];
        nextLevel.push(child);
        // Adds an edge between curr and child
        edges.push({
          source: nodeMap[curr].id,
          target: nodeMap[child].id
        });
      }
    }

    if (preLevel.length === 0) {
      currLevel++;
      let temp = preLevel;
      preLevel = nextLevel;
      nextLevel = temp;
    }
  }
};

const createClusterGraph = async () => {
  const clusters = await fs.readJson(clusterFilename);
  const graph = await fs.readJson(graphFilename);

  const nodeMap = {};
  graph.nodes.forEach(node => {
    nodeMap[node.name] = node;
    let children = {};
    for (let child of node.children) {
      children[child] = true;
    }
    nodeMap[node.name].children = children;
  });

  for (let key of Object.keys(clusters)) {
    const clusterNodes = {};
    const clusterEdges = [];
    const queue = [];
    const cluster = clusters[key];

    // Reformat element name
    const elements = cluster.elements.map(element => {
      let lastIndex = element.lastIndexOf('.');
      return `${element.slice(0, lastIndex)}:${element.slice(lastIndex + 1)}`;
    });

    // Find out the node for each element
    elements.forEach(element => {
      clusterNodes[element] = nodeMap[element];
      clusterNodes[element].groupId = cluster.id;
    });

    // Ensures edges between elements are included
    for (let i = 0; i < elements.length; i++) {
      const children = clusterNodes[elements[i]].children;
      for (let j = i; j < elements.length; j++) {
        if (children[elements[j]]) {
          clusterEdges.push({
            source: clusterNodes[elements[i]].id,
            target: clusterNodes[elements[j]].id
          });
        }
      }
    }

    // Traverse related nodes
    for (let element of elements) {
      searchNodes(element, clusterNodes, clusterEdges, nodeMap, 3);
    }

    const result = {
      nodes: Object.keys(clusterNodes).map(key => clusterNodes[key]),
      edges: clusterEdges,
      groups: [
        {
          id: cluster.id,
          title: cluster.cluster
        }
      ]
    };

    fs.outputJSON(`${folderName}/${cluster.id}.json`, result);
  }
};

createClusterGraph();
