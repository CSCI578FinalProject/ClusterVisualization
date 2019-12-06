(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3258],{

/***/ "./parser/cluster-graph/9d6960e5-1721-11ea-8278-f9f479342a46.json":
/*!************************************************************************!*\
  !*** ./parser/cluster-graph/9d6960e5-1721-11ea-8278-f9f479342a46.json ***!
  \************************************************************************/
/*! exports provided: relatedACDCClusters, nodes, edges, groups, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"relatedACDCClusters\":{\"org.apache.naming.ss\":{\"id\":\"a8f80e90-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.apache.naming.ss\",\"elements\":[\"java.security.BasicPermission\",\"org.apache.naming.JndiPermission\",\"org.apache.naming.NameParserImpl\",\"javax.naming.spi.NamingManager\",\"javax.naming.LinkRef\",\"org.apache.naming.NamingContext\",\"org.apache.naming.NamingContextEnumeration\",\"org.apache.naming.NamingContextBindingsEnumeration\",\"org.apache.naming.NamingEntry\",\"javax.naming.NotContextException\",\"javax.naming.NamingException\",\"javax.naming.NameAlreadyBoundException\",\"org.apache.naming.ContextAccessController\",\"javax.naming.Binding\",\"javax.naming.NamingEnumeration\",\"javax.naming.OperationNotSupportedException\",\"javax.naming.NameNotFoundException\",\"javax.naming.CompositeName\",\"javax.naming.NameParser\",\"javax.naming.Name\",\"javax.naming.Referenceable\",\"javax.naming.NameClassPair\"]}},\"nodes\":[{\"id\":\"10848\",\"name\":\"org.apache.naming.NamingContext:isWritable()\",\"value\":2,\"children\":{\"org.apache.naming.ContextAccessController:isWritable()\":true},\"label\":\"NamingContext:isWritable()\",\"className\":\"org.apache.naming.NamingContext\",\"acdcCluster\":\"org.apache.naming.ss\",\"groupId\":\"cluster\"},{\"id\":\"10799\",\"name\":\"org.apache.naming.ContextAccessController:isWritable()\",\"value\":2,\"children\":{\"java.util.Hashtable:containsKey()\":true},\"label\":\"ContextAccessController:isWritable()\",\"className\":\"org.apache.naming.ContextAccessController\",\"acdcCluster\":\"org.apache.naming.ss\",\"groupId\":\"cluster\"},{\"id\":\"12402\",\"name\":\"java.util.Hashtable:containsKey()\",\"value\":1,\"children\":{},\"label\":\"Hashtable:containsKey()\",\"className\":\"java.util.Hashtable\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"}],\"edges\":[{\"source\":\"10848\",\"target\":\"10799\"},{\"source\":\"10799\",\"target\":\"12402\"}],\"groups\":[{\"id\":\"cluster\",\"title\":\"org.apache.naming.NamingContext.ss9\"}]}");

/***/ })

}]);
//# sourceMappingURL=3258.js.map