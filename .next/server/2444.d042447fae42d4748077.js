exports.ids = [2444];
exports.modules = {

/***/ "Um2N":
/***/ (function(module) {

module.exports = JSON.parse("{\"relatedACDCClusters\":{\"org.apache.tomcat.jdbc.pool.ss\":{\"id\":\"a8f883dc-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"elements\":[\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$ExchangeCountDownLatch\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$FairIterator\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$ItemFuture\",\"java.util.LinkedList\",\"java.util.concurrent.locks.ReentrantLock\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$ItemFuture\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$FairIterator\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$ExchangeCountDownLatch\",\"org.apache.tomcat.jdbc.pool.XADataSource\",\"org.apache.tomcat.jdbc.pool.DataSourceFactory\",\"org.apache.tomcat.jdbc.pool.DataSource\",\"java.util.Hashtable\",\"javax.naming.InitialContext\",\"javax.sql.DataSource\",\"javax.naming.spi.ObjectFactory\",\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"org.apache.tomcat.jdbc.pool.PoolProperties$InterceptorDefinition\",\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPoolMBean\",\"org.apache.tomcat.jdbc.pool.Validator\",\"javax.sql.XADataSource\",\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"org.apache.tomcat.jdbc.pool.TrapException\",\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"org.apache.tomcat.jdbc.pool.interceptor.ConnectionState\",\"java.sql.DriverManager\",\"javax.sql.PooledConnection\",\"org.apache.tomcat.jdbc.pool.ClassLoaderUtil\",\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"org.apache.tomcat.jdbc.pool.DisposableConnectionFacade\",\"org.apache.tomcat.jdbc.pool.PoolExhaustedException\",\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner\",\"org.apache.tomcat.jdbc.pool.ConnectionPool$ConnectionFuture\",\"java.util.concurrent.LinkedBlockingQueue\",\"java.util.concurrent.BlockingQueue\",\"java.sql.SQLException\",\"java.util.ConcurrentModificationException\",\"java.lang.reflect.Proxy\",\"org.apache.tomcat.jdbc.pool.ProxyConnection\",\"org.apache.tomcat.jdbc.pool.JdbcInterceptor\",\"javax.sql.XAConnection\",\"org.apache.tomcat.jdbc.pool.interceptor.ResetAbandonedTimer\"]}},\"nodes\":[{\"id\":\"35193\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:getSuspectTimeout()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:getSuspectTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35144\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:getValidationQuery()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:getValidationQuery()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35130\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:getMinEvictableIdleTimeMillis()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:getMinEvictableIdleTimeMillis()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35141\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:getTimeBetweenEvictionRunsMillis()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:getTimeBetweenEvictionRunsMillis()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35137\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:getRemoveAbandonedTimeout()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:getRemoveAbandonedTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35140\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:isTestWhileIdle()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:isTestWhileIdle()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35195\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:isPoolSweeperEnabled()\",\"value\":8,\"children\":{\"org.apache.tomcat.jdbc.pool.PoolProperties:getTimeBetweenEvictionRunsMillis()\":true,\"org.apache.tomcat.jdbc.pool.PoolProperties:isRemoveAbandoned()\":true,\"org.apache.tomcat.jdbc.pool.PoolProperties:getRemoveAbandonedTimeout()\":true,\"org.apache.tomcat.jdbc.pool.PoolProperties:getSuspectTimeout()\":true,\"org.apache.tomcat.jdbc.pool.PoolProperties:isTestWhileIdle()\":true,\"org.apache.tomcat.jdbc.pool.PoolProperties:getValidationQuery()\":true,\"org.apache.tomcat.jdbc.pool.PoolProperties:getMinEvictableIdleTimeMillis()\":true},\"label\":\"PoolProperties:isPoolSweeperEnabled()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35136\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolProperties:isRemoveAbandoned()\",\"value\":1,\"children\":{},\"label\":\"PoolProperties:isRemoveAbandoned()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"}],\"edges\":[{\"source\":\"35195\",\"target\":\"35136\"},{\"source\":\"35195\",\"target\":\"35141\"},{\"source\":\"35195\",\"target\":\"35137\"},{\"source\":\"35195\",\"target\":\"35193\"},{\"source\":\"35195\",\"target\":\"35140\"},{\"source\":\"35195\",\"target\":\"35144\"},{\"source\":\"35195\",\"target\":\"35130\"}],\"groups\":[{\"id\":\"cluster\",\"title\":\"org.apache.tomcat.jdbc.pool.PoolProperties.ss4\"}]}");

/***/ })

};;