exports.ids = [3950];
exports.modules = {

/***/ "./parser/cluster-graph/9d69d653-1721-11ea-8278-f9f479342a46.json":
/*!************************************************************************!*\
  !*** ./parser/cluster-graph/9d69d653-1721-11ea-8278-f9f479342a46.json ***!
  \************************************************************************/
/*! exports provided: relatedACDCClusters, nodes, edges, groups, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"relatedACDCClusters\":{\"org.eclipse.jdt.internal.compiler.batch.ss\":{\"id\":\"a8f883e5-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"elements\":[\"org.eclipse.jdt.internal.compiler.batch.FileSystem\",\"org.eclipse.jdt.internal.compiler.batch.ClasspathSourceJar\",\"org.eclipse.jdt.internal.compiler.env.NameEnvironmentAnswer\",\"org.eclipse.jdt.internal.compiler.env.AccessRestriction\",\"org.eclipse.jdt.internal.compiler.env.IBinaryType\",\"org.eclipse.jdt.internal.compiler.batch.FileSystem$Classpath\",\"org.eclipse.jdt.internal.compiler.env.AccessRuleSet\",\"org.eclipse.jdt.internal.compiler.batch.FileSystem$ClasspathSectionProblemReporter\",\"org.eclipse.jdt.internal.compiler.batch.FileSystem$ClasspathNormalizer\",\"org.eclipse.jdt.internal.compiler.batch.ClasspathJar\",\"org.eclipse.jdt.internal.compiler.util.ManifestAnalyzer\",\"org.eclipse.jdt.internal.compiler.batch.ClasspathDirectory\",\"org.eclipse.jdt.core.JavaCore\",\"org.eclipse.jdt.internal.compiler.batch.ClasspathDirectory$1\",\"org.eclipse.jdt.internal.compiler.batch.Main$Logger$1\",\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"org.eclipse.jdt.core.compiler.IProblem\",\"org.eclipse.jdt.internal.compiler.impl.CompilerStats\",\"org.eclipse.jdt.internal.compiler.batch.FileFinder\",\"org.eclipse.jdt.internal.compiler.batch.Main$2\",\"org.eclipse.jdt.internal.compiler.batch.Main$1\",\"org.eclipse.jdt.internal.compiler.batch.Main\",\"org.eclipse.jdt.internal.compiler.batch.Main$3\",\"java.io.FilenameFilter\",\"java.lang.UnsupportedClassVersionError\",\"org.eclipse.jdt.internal.compiler.batch.BatchCompilerRequestor\",\"org.eclipse.jdt.core.compiler.batch.BatchCompiler\"]}},\"nodes\":[{\"id\":\"16114\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printStats()\",\"value\":7,\"children\":{\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printTag()\":true,\"java.lang.System:currentTimeMillis()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:logTiming()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:logProblemsSummary()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:logNumberOfClassFilesGenerated()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:endTag()\":true},\"label\":\"Main$Logger:printStats()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"16102\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:logTiming()\",\"value\":26,\"children\":{\"org.eclipse.jdt.internal.compiler.impl.CompilerStats:elapsedTime()\":true,\"java.lang.Long:<init>()\":true,\"java.util.HashMap:put()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printTag()\":true,\"java.lang.String:valueOf()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main:bind()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printlnOut()\":true},\"label\":\"Main$Logger:logTiming()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"16099\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:logProblemsSummary()\",\"value\":30,\"children\":{\"java.lang.Integer:<init>()\":true,\"java.util.HashMap:put()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printTag()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main:bind()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printErr()\":true,\"java.lang.String:valueOf()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printlnErr()\":true},\"label\":\"Main$Logger:logProblemsSummary()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"16093\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:logNumberOfClassFilesGenerated()\",\"value\":9,\"children\":{\"java.lang.Integer:<init>()\":true,\"java.util.HashMap:put()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printTag()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main:bind()\":true,\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printlnOut()\":true,\"java.lang.String:valueOf()\":true},\"label\":\"Main$Logger:logNumberOfClassFilesGenerated()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"17566\",\"name\":\"org.eclipse.jdt.internal.compiler.impl.CompilerStats:elapsedTime()\",\"value\":1,\"children\":{},\"label\":\"CompilerStats:elapsedTime()\",\"className\":\"org.eclipse.jdt.internal.compiler.impl.CompilerStats\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"16109\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printErr()\",\"value\":3,\"children\":{\"java.io.PrintWriter:print()\":true},\"label\":\"Main$Logger:printErr()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"17567\",\"name\":\"org.eclipse.jdt.internal.compiler.impl.CompilerStats:compareTo()\",\"value\":3,\"children\":{\"org.eclipse.jdt.internal.compiler.impl.CompilerStats:elapsedTime()\":true},\"label\":\"CompilerStats:compareTo()\",\"className\":\"org.eclipse.jdt.internal.compiler.impl.CompilerStats\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\",\"groupId\":\"cluster\"},{\"id\":\"16115\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printTag()\",\"value\":3,\"children\":{\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:printTag()\":true,\"java.util.HashMap:clear()\":true},\"label\":\"Main$Logger:printTag()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\"},{\"id\":\"1379\",\"name\":\"java.lang.System:currentTimeMillis()\",\"value\":1,\"children\":{},\"label\":\"System:currentTimeMillis()\",\"className\":\"java.lang.System\",\"acdcCluster\":\"org.apache.catalina.ssi.ss\"},{\"id\":\"16078\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:endTag()\",\"value\":2,\"children\":{\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:endTag()\":true},\"label\":\"Main$Logger:endTag()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\"},{\"id\":\"21280\",\"name\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:printTag()\",\"value\":21,\"children\":{\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:printTabulation()\":true,\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:print()\":true,\"java.util.HashMap:size()\":true,\"java.util.HashMap:entrySet()\":true,\"java.util.Set:toArray()\":true,\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter$1:<init>()\":true,\"java.util.Arrays:sort()\":true,\"java.util.Map$Entry:getKey()\":true,\"java.util.Map$Entry:getValue()\":true,\"java.lang.String:valueOf()\":true,\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:getEscaped()\":true},\"label\":\"GenericXMLWriter:printTag()\",\"className\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"3597\",\"name\":\"java.util.HashMap:clear()\",\"value\":1,\"children\":{},\"label\":\"HashMap:clear()\",\"className\":\"java.util.HashMap\",\"acdcCluster\":\"org.apache.jasper.compiler.ss\"},{\"id\":\"21277\",\"name\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:endTag()\",\"value\":6,\"children\":{\"java.lang.String:valueOf()\":true,\"java.lang.StringBuilder:<init>()\":true,\"java.lang.StringBuilder:append()\":true,\"java.lang.StringBuilder:toString()\":true,\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:printTag()\":true},\"label\":\"GenericXMLWriter:endTag()\",\"className\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"21279\",\"name\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:printTabulation()\",\"value\":2,\"children\":{\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:print()\":true},\"label\":\"GenericXMLWriter:printTabulation()\",\"className\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"22638\",\"name\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:print()\",\"value\":1,\"children\":{},\"label\":\"GenericXMLWriter:print()\",\"className\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"3529\",\"name\":\"java.util.HashMap:size()\",\"value\":1,\"children\":{},\"label\":\"HashMap:size()\",\"className\":\"java.util.HashMap\",\"acdcCluster\":\"org.apache.jasper.compiler.ss\"},{\"id\":\"3548\",\"name\":\"java.util.HashMap:entrySet()\",\"value\":1,\"children\":{},\"label\":\"HashMap:entrySet()\",\"className\":\"java.util.HashMap\",\"acdcCluster\":\"org.apache.jasper.compiler.ss\"},{\"id\":\"234\",\"name\":\"java.util.Set:toArray()\",\"value\":1,\"children\":{},\"label\":\"Set:toArray()\",\"className\":\"java.util.Set\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.apt.dispatch.ss\"},{\"id\":\"21270\",\"name\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter$1:<init>()\",\"value\":2,\"children\":{\"java.lang.Object:<init>()\":true},\"label\":\"GenericXMLWriter$1:<init>()\",\"className\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter$1\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"3475\",\"name\":\"java.util.Arrays:sort()\",\"value\":1,\"children\":{},\"label\":\"Arrays:sort()\",\"className\":\"java.util.Arrays\",\"acdcCluster\":\"org.apache.catalina.tribes.group.ss\"},{\"id\":\"1459\",\"name\":\"java.util.Map$Entry:getKey()\",\"value\":1,\"children\":{},\"label\":\"Map$Entry:getKey()\",\"className\":\"java.util.Map$Entry\",\"acdcCluster\":\"org.apache.tomcat.util.collections.ss\"},{\"id\":\"1410\",\"name\":\"java.util.Map$Entry:getValue()\",\"value\":1,\"children\":{},\"label\":\"Map$Entry:getValue()\",\"className\":\"java.util.Map$Entry\",\"acdcCluster\":\"org.apache.tomcat.util.collections.ss\"},{\"id\":\"3553\",\"name\":\"java.lang.String:valueOf()\",\"value\":1,\"children\":{},\"label\":\"String:valueOf()\",\"className\":\"java.lang.String\",\"acdcCluster\":\"org.apache.catalina.valves.ss\"},{\"id\":\"21274\",\"name\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:getEscaped()\",\"value\":7,\"children\":{\"java.lang.String:length()\":true,\"java.lang.StringBuffer:<init>()\":true,\"java.lang.String:charAt()\":true,\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter:appendEscapedChar()\":true,\"java.lang.StringBuffer:toString()\":true},\"label\":\"GenericXMLWriter:getEscaped()\",\"className\":\"org.eclipse.jdt.internal.compiler.util.GenericXMLWriter\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"169\",\"name\":\"java.lang.StringBuilder:<init>()\",\"value\":1,\"children\":{},\"label\":\"StringBuilder:<init>()\",\"className\":\"java.lang.StringBuilder\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"170\",\"name\":\"java.lang.StringBuilder:append()\",\"value\":1,\"children\":{},\"label\":\"StringBuilder:append()\",\"className\":\"java.lang.StringBuilder\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"171\",\"name\":\"java.lang.StringBuilder:toString()\",\"value\":1,\"children\":{},\"label\":\"StringBuilder:toString()\",\"className\":\"java.lang.StringBuilder\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"21616\",\"name\":\"java.lang.Long:<init>()\",\"value\":1,\"children\":{},\"label\":\"Long:<init>()\",\"className\":\"java.lang.Long\",\"acdcCluster\":\"org.apache.tomcat.util.net.ss\"},{\"id\":\"1377\",\"name\":\"java.util.HashMap:put()\",\"value\":1,\"children\":{},\"label\":\"HashMap:put()\",\"className\":\"java.util.HashMap\",\"acdcCluster\":\"org.apache.jasper.compiler.ss\"},{\"id\":\"16136\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main:bind()\",\"value\":11,\"children\":{\"org.eclipse.jdt.internal.compiler.batch.Main:bind()\":true,\"java.util.ResourceBundle:getString()\":true,\"java.lang.StringBuilder:<init>()\":true,\"java.lang.StringBuilder:append()\":true,\"java.lang.StringBuilder:toString()\":true,\"java.text.MessageFormat:format()\":true},\"label\":\"Main:bind()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\"},{\"id\":\"16111\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printlnOut()\",\"value\":3,\"children\":{\"java.io.PrintWriter:println()\":true},\"label\":\"Main$Logger:printlnOut()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\"},{\"id\":\"3880\",\"name\":\"java.util.ResourceBundle:getString()\",\"value\":1,\"children\":{},\"label\":\"ResourceBundle:getString()\",\"className\":\"java.util.ResourceBundle\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.tool.ss\"},{\"id\":\"3883\",\"name\":\"java.text.MessageFormat:format()\",\"value\":1,\"children\":{},\"label\":\"MessageFormat:format()\",\"className\":\"java.text.MessageFormat\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.util.ss\"},{\"id\":\"1917\",\"name\":\"java.io.PrintWriter:println()\",\"value\":1,\"children\":{},\"label\":\"PrintWriter:println()\",\"className\":\"java.io.PrintWriter\",\"acdcCluster\":\"org.apache.catalina.ssi.ss\"},{\"id\":\"21553\",\"name\":\"java.lang.Integer:<init>()\",\"value\":1,\"children\":{},\"label\":\"Integer:<init>()\",\"className\":\"java.lang.Integer\",\"acdcCluster\":\"org.apache.tomcat.util.net.ss\"},{\"id\":\"16110\",\"name\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger:printlnErr()\",\"value\":5,\"children\":{\"java.io.PrintWriter:println()\":true},\"label\":\"Main$Logger:printlnErr()\",\"className\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger\",\"acdcCluster\":\"org.eclipse.jdt.internal.compiler.batch.ss\"},{\"id\":\"1916\",\"name\":\"java.io.PrintWriter:print()\",\"value\":1,\"children\":{},\"label\":\"PrintWriter:print()\",\"className\":\"java.io.PrintWriter\",\"acdcCluster\":\"org.apache.catalina.ssi.ss\"}],\"edges\":[{\"source\":\"16114\",\"target\":\"16102\"},{\"source\":\"16114\",\"target\":\"16099\"},{\"source\":\"16114\",\"target\":\"16093\"},{\"source\":\"16102\",\"target\":\"17566\"},{\"source\":\"16099\",\"target\":\"16109\"},{\"source\":\"16114\",\"target\":\"16115\"},{\"source\":\"16114\",\"target\":\"1379\"},{\"source\":\"16114\",\"target\":\"16078\"},{\"source\":\"16115\",\"target\":\"21280\"},{\"source\":\"16115\",\"target\":\"3597\"},{\"source\":\"16078\",\"target\":\"21277\"},{\"source\":\"21280\",\"target\":\"21279\"},{\"source\":\"21280\",\"target\":\"22638\"},{\"source\":\"21280\",\"target\":\"3529\"},{\"source\":\"21280\",\"target\":\"3548\"},{\"source\":\"21280\",\"target\":\"234\"},{\"source\":\"21280\",\"target\":\"21270\"},{\"source\":\"21280\",\"target\":\"3475\"},{\"source\":\"21280\",\"target\":\"1459\"},{\"source\":\"21280\",\"target\":\"1410\"},{\"source\":\"21280\",\"target\":\"3553\"},{\"source\":\"21280\",\"target\":\"21274\"},{\"source\":\"21277\",\"target\":\"3553\"},{\"source\":\"21277\",\"target\":\"169\"},{\"source\":\"21277\",\"target\":\"170\"},{\"source\":\"21277\",\"target\":\"171\"},{\"source\":\"21277\",\"target\":\"21280\"},{\"source\":\"16102\",\"target\":\"21616\"},{\"source\":\"16102\",\"target\":\"1377\"},{\"source\":\"16102\",\"target\":\"16115\"},{\"source\":\"16102\",\"target\":\"3553\"},{\"source\":\"16102\",\"target\":\"16136\"},{\"source\":\"16102\",\"target\":\"16111\"},{\"source\":\"16136\",\"target\":\"16136\"},{\"source\":\"16136\",\"target\":\"3880\"},{\"source\":\"16136\",\"target\":\"169\"},{\"source\":\"16136\",\"target\":\"170\"},{\"source\":\"16136\",\"target\":\"171\"},{\"source\":\"16136\",\"target\":\"3883\"},{\"source\":\"16111\",\"target\":\"1917\"},{\"source\":\"16099\",\"target\":\"21553\"},{\"source\":\"16099\",\"target\":\"1377\"},{\"source\":\"16099\",\"target\":\"16115\"},{\"source\":\"16099\",\"target\":\"16136\"},{\"source\":\"16099\",\"target\":\"3553\"},{\"source\":\"16099\",\"target\":\"16110\"},{\"source\":\"16110\",\"target\":\"1917\"},{\"source\":\"16093\",\"target\":\"21553\"},{\"source\":\"16093\",\"target\":\"1377\"},{\"source\":\"16093\",\"target\":\"16115\"},{\"source\":\"16093\",\"target\":\"16136\"},{\"source\":\"16093\",\"target\":\"16111\"},{\"source\":\"16093\",\"target\":\"3553\"},{\"source\":\"16109\",\"target\":\"1916\"},{\"source\":\"17567\",\"target\":\"17566\"}],\"groups\":[{\"id\":\"cluster\",\"title\":\"org.eclipse.jdt.internal.compiler.batch.Main$Logger.ss6\"}]}");

/***/ })

};;
//# sourceMappingURL=3950.js.map