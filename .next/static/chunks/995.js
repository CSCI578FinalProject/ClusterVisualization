(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[995],{

/***/ "./parser/cluster-graph/9d673dfc-1721-11ea-8278-f9f479342a46.json":
/*!************************************************************************!*\
  !*** ./parser/cluster-graph/9d673dfc-1721-11ea-8278-f9f479342a46.json ***!
  \************************************************************************/
/*! exports provided: relatedACDCClusters, nodes, edges, groups, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"relatedACDCClusters\":{\"org.apache.naming.ss\":{\"id\":\"a8f80e90-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.apache.naming.ss\",\"elements\":[\"java.security.BasicPermission\",\"org.apache.naming.JndiPermission\",\"org.apache.naming.NameParserImpl\",\"javax.naming.spi.NamingManager\",\"javax.naming.LinkRef\",\"org.apache.naming.NamingContext\",\"org.apache.naming.NamingContextEnumeration\",\"org.apache.naming.NamingContextBindingsEnumeration\",\"org.apache.naming.NamingEntry\",\"javax.naming.NotContextException\",\"javax.naming.NamingException\",\"javax.naming.NameAlreadyBoundException\",\"org.apache.naming.ContextAccessController\",\"javax.naming.Binding\",\"javax.naming.NamingEnumeration\",\"javax.naming.OperationNotSupportedException\",\"javax.naming.NameNotFoundException\",\"javax.naming.CompositeName\",\"javax.naming.NameParser\",\"javax.naming.Name\",\"javax.naming.Referenceable\",\"javax.naming.NameClassPair\"]}},\"nodes\":[{\"id\":\"10849\",\"name\":\"org.apache.naming.NamingContext:checkWritable()\",\"value\":4,\"children\":{\"org.apache.naming.NamingContext:isWritable()\":true,\"org.apache.naming.StringManager:getString()\":true,\"javax.naming.OperationNotSupportedException:<init>()\":true},\"label\":\"NamingContext:checkWritable()\",\"className\":\"org.apache.naming.NamingContext\",\"acdcCluster\":\"org.apache.naming.ss\",\"groupId\":\"cluster\"},{\"id\":\"10846\",\"name\":\"org.apache.naming.NamingContext:close()\",\"value\":3,\"children\":{\"org.apache.naming.NamingContext:checkWritable()\":true,\"java.util.Hashtable:clear()\":true},\"label\":\"NamingContext:close()\",\"className\":\"org.apache.naming.NamingContext\",\"acdcCluster\":\"org.apache.naming.ss\",\"groupId\":\"cluster\"},{\"id\":\"10848\",\"name\":\"org.apache.naming.NamingContext:isWritable()\",\"value\":2,\"children\":{\"org.apache.naming.ContextAccessController:isWritable()\":true},\"label\":\"NamingContext:isWritable()\",\"className\":\"org.apache.naming.NamingContext\",\"acdcCluster\":\"org.apache.naming.ss\"},{\"id\":\"10911\",\"name\":\"org.apache.naming.StringManager:getString()\",\"value\":9,\"children\":{\"java.lang.IllegalArgumentException:<init>()\":true,\"java.util.ResourceBundle:getString()\":true,\"org.apache.naming.StringManager:getString()\":true,\"java.text.MessageFormat:<init>()\":true,\"java.text.MessageFormat:setLocale()\":true,\"java.lang.StringBuffer:<init>()\":true,\"java.text.MessageFormat:format()\":true,\"java.lang.StringBuffer:toString()\":true},\"label\":\"StringManager:getString()\",\"className\":\"org.apache.naming.StringManager\",\"acdcCluster\":\"org.apache.naming.java.ss\"},{\"id\":\"13133\",\"name\":\"javax.naming.OperationNotSupportedException:<init>()\",\"value\":1,\"children\":{},\"label\":\"OperationNotSupportedException:<init>()\",\"className\":\"javax.naming.OperationNotSupportedException\",\"acdcCluster\":\"org.apache.naming.ss\"},{\"id\":\"10799\",\"name\":\"org.apache.naming.ContextAccessController:isWritable()\",\"value\":2,\"children\":{\"java.util.Hashtable:containsKey()\":true},\"label\":\"ContextAccessController:isWritable()\",\"className\":\"org.apache.naming.ContextAccessController\",\"acdcCluster\":\"org.apache.naming.ss\"},{\"id\":\"201\",\"name\":\"java.lang.IllegalArgumentException:<init>()\",\"value\":1,\"children\":{},\"label\":\"IllegalArgumentException:<init>()\",\"className\":\"java.lang.IllegalArgumentException\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"3880\",\"name\":\"java.util.ResourceBundle:getString()\",\"value\":1,\"children\":{},\"label\":\"ResourceBundle:getString()\",\"className\":\"java.util.ResourceBundle\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.tool.ss\"},{\"id\":\"3881\",\"name\":\"java.text.MessageFormat:<init>()\",\"value\":1,\"children\":{},\"label\":\"MessageFormat:<init>()\",\"className\":\"java.text.MessageFormat\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"3882\",\"name\":\"java.text.MessageFormat:setLocale()\",\"value\":1,\"children\":{},\"label\":\"MessageFormat:setLocale()\",\"className\":\"java.text.MessageFormat\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"2039\",\"name\":\"java.lang.StringBuffer:<init>()\",\"value\":1,\"children\":{},\"label\":\"StringBuffer:<init>()\",\"className\":\"java.lang.StringBuffer\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.codegen.ss\"},{\"id\":\"3883\",\"name\":\"java.text.MessageFormat:format()\",\"value\":1,\"children\":{},\"label\":\"MessageFormat:format()\",\"className\":\"java.text.MessageFormat\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"2041\",\"name\":\"java.lang.StringBuffer:toString()\",\"value\":1,\"children\":{},\"label\":\"StringBuffer:toString()\",\"className\":\"java.lang.StringBuffer\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.codegen.ss\"},{\"id\":\"12402\",\"name\":\"java.util.Hashtable:containsKey()\",\"value\":1,\"children\":{},\"label\":\"Hashtable:containsKey()\",\"className\":\"java.util.Hashtable\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"13132\",\"name\":\"java.util.Hashtable:clear()\",\"value\":1,\"children\":{},\"label\":\"Hashtable:clear()\",\"className\":\"java.util.Hashtable\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"}],\"edges\":[{\"source\":\"10849\",\"target\":\"10848\"},{\"source\":\"10849\",\"target\":\"10911\"},{\"source\":\"10849\",\"target\":\"13133\"},{\"source\":\"10848\",\"target\":\"10799\"},{\"source\":\"10911\",\"target\":\"201\"},{\"source\":\"10911\",\"target\":\"3880\"},{\"source\":\"10911\",\"target\":\"10911\"},{\"source\":\"10911\",\"target\":\"3881\"},{\"source\":\"10911\",\"target\":\"3882\"},{\"source\":\"10911\",\"target\":\"2039\"},{\"source\":\"10911\",\"target\":\"3883\"},{\"source\":\"10911\",\"target\":\"2041\"},{\"source\":\"10799\",\"target\":\"12402\"},{\"source\":\"10846\",\"target\":\"10849\"},{\"source\":\"10846\",\"target\":\"13132\"}],\"groups\":[{\"id\":\"cluster\",\"title\":\"org.apache.naming.NamingContext.ss2\"}]}");

/***/ })

}]);
//# sourceMappingURL=995.js.map