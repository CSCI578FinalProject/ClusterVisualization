# Cluster Visualization

This tool visualizes relationship between elements in a cluster.

## How to use

```bash
# The first step is to prepare the cluster-graph data using parser
# Copy the cluster file and call graph file to parser directory
node  parseCluster.js [clusterFileName]
node  parseGraph.js [callGraphFileName]
# Generate cluster graph for each cluster
node  generateClusterGraph.js [parsedClusterFilename] [parsedCallGraphFileName]

# Launch the pages on your local machine
npm run dev

```
