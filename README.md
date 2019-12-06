# Cluster Visualization

This tool visualizes relationship between elements in a cluster.

## Features

### Cluster Page

1. View cluster results with search to quickly identify target cluster (click the
   magnifier icon)

### Visualization Page

1. Visualization of relationship between cluster elements and their neighbors
   (Currently only 3 calls away to prevent overflow).
2. Hover on the node will show its full name and which ACDC cluster it comes from
3. Click on the cluster cycle can toggle the view to only display relationships between
   the entire cluster with its neighbors
4. View related ACDC clusters and used elements for current cluster will be highlighted

## How to use

First of all, you need to generate following files using other tools and install the dependencies:

1. Original ACDC clusters
2. Functional sections clusters
3. Call graph

```bash
cd [projectSrc]
# This tool needs to be run with Node.js LTS
# https://nodejs.org/en/
npm install
```

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

## Notice

https://github.com/zeit/next.js/issues/7929 current version of `next.js` may have
out of memory issues while compiling files. If it doesn't work after trying advices
provided in the issue, a pre-built version and sample data is provided in `build` branch.
