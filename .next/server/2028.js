exports.ids = [2028];
exports.modules = {

/***/ "./parser/cluster-graph/9d680204-1721-11ea-8278-f9f479342a46.json":
/*!************************************************************************!*\
  !*** ./parser/cluster-graph/9d680204-1721-11ea-8278-f9f479342a46.json ***!
  \************************************************************************/
/*! exports provided: relatedACDCClusters, nodes, edges, groups, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"relatedACDCClusters\":{\"org.apache.tomcat.jdbc.pool.ss\":{\"id\":\"a8f883dc-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"elements\":[\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$ExchangeCountDownLatch\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$FairIterator\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$ItemFuture\",\"java.util.LinkedList\",\"java.util.concurrent.locks.ReentrantLock\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$ItemFuture\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$FairIterator\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$ExchangeCountDownLatch\",\"org.apache.tomcat.jdbc.pool.XADataSource\",\"org.apache.tomcat.jdbc.pool.DataSourceFactory\",\"org.apache.tomcat.jdbc.pool.DataSource\",\"java.util.Hashtable\",\"javax.naming.InitialContext\",\"javax.sql.DataSource\",\"javax.naming.spi.ObjectFactory\",\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"org.apache.tomcat.jdbc.pool.PoolProperties$InterceptorDefinition\",\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPoolMBean\",\"org.apache.tomcat.jdbc.pool.Validator\",\"javax.sql.XADataSource\",\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"org.apache.tomcat.jdbc.pool.TrapException\",\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"org.apache.tomcat.jdbc.pool.interceptor.ConnectionState\",\"java.sql.DriverManager\",\"javax.sql.PooledConnection\",\"org.apache.tomcat.jdbc.pool.ClassLoaderUtil\",\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"org.apache.tomcat.jdbc.pool.DisposableConnectionFacade\",\"org.apache.tomcat.jdbc.pool.PoolExhaustedException\",\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner\",\"org.apache.tomcat.jdbc.pool.ConnectionPool$ConnectionFuture\",\"java.util.concurrent.LinkedBlockingQueue\",\"java.util.concurrent.BlockingQueue\",\"java.sql.SQLException\",\"java.util.ConcurrentModificationException\",\"java.lang.reflect.Proxy\",\"org.apache.tomcat.jdbc.pool.ProxyConnection\",\"org.apache.tomcat.jdbc.pool.JdbcInterceptor\",\"javax.sql.XAConnection\",\"org.apache.tomcat.jdbc.pool.interceptor.ResetAbandonedTimer\"]}},\"nodes\":[{\"id\":\"34671\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner:<init>()\",\"value\":7,\"children\":{\"java.util.TimerTask:<init>()\":true,\"java.lang.ref.WeakReference:<init>()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:access$100()\":true,\"org.apache.juli.logging.Log:warn()\":true},\"label\":\"ConnectionPool$PoolCleaner:<init>()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34691\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:initializePoolCleaner()\",\"value\":5,\"children\":{\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isPoolSweeperEnabled()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getTimeBetweenEvictionRunsMillis()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner:<init>()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner:start()\":true},\"label\":\"ConnectionPool:initializePoolCleaner()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35038\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getTimeBetweenEvictionRunsMillis()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:getTimeBetweenEvictionRunsMillis()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34828\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getTimeBetweenEvictionRunsMillis()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getTimeBetweenEvictionRunsMillis()\":true},\"label\":\"DataSourceProxy:getTimeBetweenEvictionRunsMillis()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34521\",\"name\":\"java.util.TimerTask:<init>()\",\"value\":1,\"children\":{},\"label\":\"TimerTask:<init>()\",\"className\":\"java.util.TimerTask\",\"acdcCluster\":\"org.apache.tomcat.dbcp.pool2.ss\"},{\"id\":\"3538\",\"name\":\"java.lang.ref.WeakReference:<init>()\",\"value\":1,\"children\":{},\"label\":\"WeakReference:<init>()\",\"className\":\"java.lang.ref.WeakReference\",\"acdcCluster\":\"org.apache.tomcat.dbcp.pool2.impl.ss\"},{\"id\":\"34721\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:access$100()\",\"value\":1,\"children\":{},\"label\":\"ConnectionPool:access$100()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"191\",\"name\":\"org.apache.juli.logging.Log:warn()\",\"value\":1,\"children\":{},\"label\":\"Log:warn()\",\"className\":\"org.apache.juli.logging.Log\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"35061\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isPoolSweeperEnabled()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:isPoolSweeperEnabled()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34673\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner:start()\",\"value\":2,\"children\":{\"org.apache.tomcat.jdbc.pool.ConnectionPool:access$300()\":true},\"label\":\"ConnectionPool$PoolCleaner:start()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34723\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:access$300()\",\"value\":2,\"children\":{\"org.apache.tomcat.jdbc.pool.ConnectionPool:registerCleaner()\":true},\"label\":\"ConnectionPool:access$300()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34715\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:registerCleaner()\",\"value\":24,\"children\":{\"org.apache.tomcat.jdbc.pool.ConnectionPool:unregisterCleaner()\":true,\"java.util.HashSet:add()\":true,\"java.lang.Thread:currentThread()\":true,\"java.lang.Thread:getContextClassLoader()\":true,\"java.lang.Class:getClassLoader()\":true,\"java.lang.Thread:setContextClassLoader()\":true,\"java.lang.StringBuilder:<init>()\":true,\"java.lang.StringBuilder:append()\":true,\"java.lang.System:identityHashCode()\":true,\"java.lang.System:currentTimeMillis()\":true,\"java.lang.StringBuilder:toString()\":true,\"java.util.Timer:<init>()\":true,\"java.util.Timer:scheduleAtFixedRate()\":true},\"label\":\"ConnectionPool:registerCleaner()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34749\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\",\"value\":1,\"children\":{},\"label\":\"DataSourceProxy:getPoolProperties()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"}],\"edges\":[{\"source\":\"34691\",\"target\":\"35038\"},{\"source\":\"34671\",\"target\":\"34521\"},{\"source\":\"34671\",\"target\":\"3538\"},{\"source\":\"34671\",\"target\":\"34721\"},{\"source\":\"34671\",\"target\":\"191\"},{\"source\":\"34691\",\"target\":\"35061\"},{\"source\":\"34691\",\"target\":\"34671\"},{\"source\":\"34691\",\"target\":\"34673\"},{\"source\":\"34673\",\"target\":\"34723\"},{\"source\":\"34723\",\"target\":\"34715\"},{\"source\":\"34828\",\"target\":\"34749\"},{\"source\":\"34828\",\"target\":\"35038\"}],\"groups\":[{\"id\":\"cluster\",\"title\":\"org.apache.tomcat.jdbc.pool.ConnectionPool.ss4\"}]}");

/***/ })

};;
//# sourceMappingURL=2028.js.map