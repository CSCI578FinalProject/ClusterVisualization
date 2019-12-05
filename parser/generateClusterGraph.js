const fs = require('fs-extra');
const clusterFilename = process.argv[2] || 'cluster.json';
const graphFilename = process.argv[3] || 'graph.json';
const acdcClusterFilename = process.argv[4] || 'acdcCluster.json';
const folderName = process.argv[5] || 'cluster-graph';

const CLUSTER_ID = 'cluster';

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
        nodes[child] = Object.assign({}, nodeMap[child]);
        nextLevel.push(child);
      }

      let hasEdge = false;
      for (let edge of edges) {
        if (
          edge.source === nodeMap[curr].id &&
          edge.target === nodeMap[child].id
        ) {
          hasEdge = true;
          break;
        }
      }

      if (!hasEdge) {
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
  const acdcClusters = await fs.readJson(acdcClusterFilename);
  // Removes previous results
  await fs.remove(`${folderName}/*`);
  const acdcClusterMap = acdcClusters.clusterMap;
  const acdcClassMap = acdcClusters.classMap;

  const nodeMap = {};
  graph.nodes.forEach(node => {
    nodeMap[node.name] = node;
    let children = {};
    for (let child of node.children) {
      children[child] = true;
    }

    // Extracts function name with class as label
    const lastIndexOfDot = node.name.lastIndexOf('.');
    node.label = node.name.slice(lastIndexOfDot >= 0 ? lastIndexOfDot + 1 : 0);

    // Extracts class name
    const classEnd = node.name.lastIndexOf(':');
    node.className = node.name.slice(
      0,
      classEnd >= 0 ? classEnd : node.name.length
    );

    // Find out elements original ACDC clusters
    node.acdcCluster = acdcClassMap[node.className];
    nodeMap[node.name].children = children;
  });

  for (let key of Object.keys(clusters)) {
    const clusterNodes = {};
    const clusterEdges = [];
    const cluster = clusters[key];
    const relatedACDCClusters = {};

    // Reformat element name
    const elements = cluster.elements.map(element => {
      let lastIndex = element.lastIndexOf('.');
      return `${element.slice(0, lastIndex)}:${element.slice(lastIndex + 1)}`;
    });

    // Find out the node for each element
    elements.forEach(element => {
      clusterNodes[element] = Object.assign({}, nodeMap[element]);
      clusterNodes[element].groupId = CLUSTER_ID;
      const acdcClusterName = clusterNodes[element].acdcCluster;
      if (!relatedACDCClusters[acdcClusterName]) {
        relatedACDCClusters[acdcClusterName] = acdcClusterMap[acdcClusterName];
      }
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
      relatedACDCClusters,
      nodes: Object.keys(clusterNodes).map(key => clusterNodes[key]),
      edges: clusterEdges,
      groups: [
        {
          id: CLUSTER_ID,
          title: cluster.cluster
        }
      ]
    };
    // Removes previous files
    fs.outputJSON(`${folderName}/${cluster.id}.json`, result);
  }
};

createClusterGraph();
