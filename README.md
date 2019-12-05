# Cluster Visualization

This tool visualizes relationship between elements in a cluster.

## How to use

First of all, you need to generate following files using other tools:

1. Original ACDC clusters
2. Functional sections clusters
3. Call graph

Then, you can use tools in `parser` to prepare the data for visualization.

```bash
# [] means the field is not required.

# The first step is to prepare the cluster-graph data using parser
# Copy the cluster file and call graph file to parser directory
node  parseCluster.js clusterFilename [outputFilename]
node  parseGraph.js callGraphFilename [outputFilename]
node  parseACDCCluster.js acdcClusterFilename [outputFilename]

# Generate cluster graph for each cluster
# If you use default output filename for previous steps, you can omit all fields
node  generateClusterGraph.js [parsedClusterFilename] [parsedCallGraphFilename] [parsedACDCClusterFilename] [outputDir]
```

After the above data is created, you can launch the visualization application
using following commands

```bash
# Launches the pages on your local machine
npm run dev

# Creates a built version of the pages
npm run build
npm run start
```
