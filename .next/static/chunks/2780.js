(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2780],{

/***/ "./parser/cluster-graph/9d68ebcf-1721-11ea-8278-f9f479342a46.json":
/*!************************************************************************!*\
  !*** ./parser/cluster-graph/9d68ebcf-1721-11ea-8278-f9f479342a46.json ***!
  \************************************************************************/
/*! exports provided: relatedACDCClusters, nodes, edges, groups, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"relatedACDCClusters\":{\"org.apache.tomcat.jdbc.pool.ss\":{\"id\":\"a8f883dc-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"elements\":[\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$ExchangeCountDownLatch\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$FairIterator\",\"org.apache.tomcat.jdbc.pool.MultiLockFairBlockingQueue$ItemFuture\",\"java.util.LinkedList\",\"java.util.concurrent.locks.ReentrantLock\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$ItemFuture\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$FairIterator\",\"org.apache.tomcat.jdbc.pool.FairBlockingQueue$ExchangeCountDownLatch\",\"org.apache.tomcat.jdbc.pool.XADataSource\",\"org.apache.tomcat.jdbc.pool.DataSourceFactory\",\"org.apache.tomcat.jdbc.pool.DataSource\",\"java.util.Hashtable\",\"javax.naming.InitialContext\",\"javax.sql.DataSource\",\"javax.naming.spi.ObjectFactory\",\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"org.apache.tomcat.jdbc.pool.PoolProperties$InterceptorDefinition\",\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPoolMBean\",\"org.apache.tomcat.jdbc.pool.Validator\",\"javax.sql.XADataSource\",\"org.apache.tomcat.jdbc.pool.PoolProperties\",\"org.apache.tomcat.jdbc.pool.TrapException\",\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"org.apache.tomcat.jdbc.pool.interceptor.ConnectionState\",\"java.sql.DriverManager\",\"javax.sql.PooledConnection\",\"org.apache.tomcat.jdbc.pool.ClassLoaderUtil\",\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"org.apache.tomcat.jdbc.pool.DisposableConnectionFacade\",\"org.apache.tomcat.jdbc.pool.PoolExhaustedException\",\"org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner\",\"org.apache.tomcat.jdbc.pool.ConnectionPool$ConnectionFuture\",\"java.util.concurrent.LinkedBlockingQueue\",\"java.util.concurrent.BlockingQueue\",\"java.sql.SQLException\",\"java.util.ConcurrentModificationException\",\"java.lang.reflect.Proxy\",\"org.apache.tomcat.jdbc.pool.ProxyConnection\",\"org.apache.tomcat.jdbc.pool.JdbcInterceptor\",\"javax.sql.XAConnection\",\"org.apache.tomcat.jdbc.pool.interceptor.ResetAbandonedTimer\"]},\"org.apache.tomcat.jdbc.pool.interceptor.ss\":{\"id\":\"a8f80e98-1721-11ea-8ada-add5f6e8eea0\",\"cluster\":\"org.apache.tomcat.jdbc.pool.interceptor.ss\",\"elements\":[\"org.apache.tomcat.jdbc.pool.interceptor.StatementFinalizer$StatementEntry\",\"org.apache.tomcat.jdbc.pool.interceptor.StatementFinalizer\",\"java.sql.Statement\",\"org.apache.tomcat.jdbc.pool.PoolProperties$InterceptorProperty\",\"org.apache.tomcat.jdbc.pool.interceptor.AbstractCreateStatementInterceptor\",\"java.lang.StringIndexOutOfBoundsException\",\"org.apache.tomcat.jdbc.pool.interceptor.QueryTimeoutInterceptor\",\"org.apache.tomcat.jdbc.pool.interceptor.StatementCache$CachedStatement\",\"org.apache.tomcat.jdbc.pool.interceptor.StatementCache\",\"org.apache.tomcat.jdbc.pool.interceptor.StatementDecoratorInterceptor\",\"org.apache.tomcat.jdbc.pool.interceptor.StatementDecoratorInterceptor$StatementProxy\",\"org.apache.tomcat.jdbc.pool.interceptor.StatementDecoratorInterceptor$ResultSetProxy\",\"org.apache.tomcat.jdbc.pool.interceptor.AbstractQueryReport\",\"org.apache.tomcat.jdbc.pool.interceptor.AbstractQueryReport$StatementProxy\",\"java.lang.reflect.InvocationHandler\",\"org.apache.tomcat.jdbc.pool.interceptor.SlowQueryReport$QueryStatsComparator\",\"org.apache.tomcat.jdbc.pool.interceptor.SlowQueryReport$1\",\"org.apache.tomcat.jdbc.pool.interceptor.SlowQueryReport\",\"org.apache.tomcat.jdbc.pool.interceptor.SlowQueryReport$QueryStats\",\"org.apache.tomcat.jdbc.pool.interceptor.SlowQueryReportJmx\",\"org.apache.tomcat.jdbc.pool.interceptor.SlowQueryReportJmxMBean\",\"javax.management.openmbean.CompositeDataSupport\",\"javax.management.openmbean.OpenType\",\"javax.management.openmbean.CompositeType\",\"javax.management.openmbean.CompositeData\",\"java.util.concurrent.ConcurrentHashMap$KeySetView\",\"javax.management.NotificationBroadcasterSupport\",\"javax.management.NotificationEmitter\",\"javax.management.MBeanRegistrationException\",\"javax.management.InstanceAlreadyExistsException\",\"javax.management.NotCompliantMBeanException\",\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool\",\"org.apache.tomcat.jdbc.pool.PoolUtilities\",\"javax.management.openmbean.OpenDataException\"]}},\"nodes\":[{\"id\":\"34701\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:shouldAbandon()\",\"value\":5,\"children\":{\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getAbandonWhenPercentageFull()\":true,\"java.util.concurrent.BlockingQueue:size()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getMaxActive()\":true},\"label\":\"ConnectionPool:shouldAbandon()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34702\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:checkAbandoned()\",\"value\":21,\"children\":{\"java.util.concurrent.BlockingQueue:size()\":true,\"java.util.concurrent.BlockingQueue:iterator()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getSuspectTimeout()\":true,\"java.util.Iterator:hasNext()\":true,\"java.util.Iterator:next()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:lock()\":true,\"java.util.concurrent.BlockingQueue:contains()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:unlock()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:getTimestamp()\":true,\"java.lang.System:currentTimeMillis()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:shouldAbandon()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:getAbandonTimeout()\":true,\"java.util.concurrent.BlockingQueue:remove()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:abandon()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:suspect()\":true,\"org.apache.juli.logging.Log:debug()\":true,\"org.apache.juli.logging.Log:warn()\":true},\"label\":\"ConnectionPool:checkAbandoned()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35240\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:getAbandonTimeout()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getRemoveAbandonedTimeout()\":true},\"label\":\"PooledConnection:getAbandonTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35009\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getMaxActive()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:getMaxActive()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34984\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getAbandonWhenPercentageFull()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:getAbandonWhenPercentageFull()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35069\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getSuspectTimeout()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:getSuspectTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35031\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getRemoveAbandonedTimeout()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:getRemoveAbandonedTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34799\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getSuspectTimeout()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getSuspectTimeout()\":true},\"label\":\"DataSourceProxy:getSuspectTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34818\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getMaxActive()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getMaxActive()\":true},\"label\":\"DataSourceProxy:getMaxActive()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34827\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getRemoveAbandonedTimeout()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getRemoveAbandonedTimeout()\":true},\"label\":\"DataSourceProxy:getRemoveAbandonedTimeout()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"34843\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getAbandonWhenPercentageFull()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getAbandonWhenPercentageFull()\":true},\"label\":\"DataSourceProxy:getAbandonWhenPercentageFull()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\",\"groupId\":\"cluster\"},{\"id\":\"35488\",\"name\":\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool:checkAbandoned()\",\"value\":2,\"children\":{\"org.apache.tomcat.jdbc.pool.ConnectionPool:checkAbandoned()\":true},\"label\":\"ConnectionPool:checkAbandoned()\",\"className\":\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.interceptor.ss\",\"groupId\":\"cluster\"},{\"id\":\"11901\",\"name\":\"java.util.concurrent.BlockingQueue:size()\",\"value\":1,\"children\":{},\"label\":\"BlockingQueue:size()\",\"className\":\"java.util.concurrent.BlockingQueue\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35614\",\"name\":\"java.util.concurrent.BlockingQueue:iterator()\",\"value\":1,\"children\":{},\"label\":\"BlockingQueue:iterator()\",\"className\":\"java.util.concurrent.BlockingQueue\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34681\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:getPoolProperties()\",\"value\":1,\"children\":{},\"label\":\"ConnectionPool:getPoolProperties()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"237\",\"name\":\"java.util.Iterator:hasNext()\",\"value\":1,\"children\":{},\"label\":\"Iterator:hasNext()\",\"className\":\"java.util.Iterator\",\"acdcCluster\":\"org.apache.el.stream.ss\"},{\"id\":\"238\",\"name\":\"java.util.Iterator:next()\",\"value\":1,\"children\":{},\"label\":\"Iterator:next()\",\"className\":\"java.util.Iterator\",\"acdcCluster\":\"org.apache.el.stream.ss\"},{\"id\":\"35257\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:lock()\",\"value\":5,\"children\":{\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getUseLock()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isPoolSweeperEnabled()\":true,\"java.util.concurrent.locks.ReentrantReadWriteLock:writeLock()\":true,\"java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock:lock()\":true},\"label\":\"PooledConnection:lock()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35615\",\"name\":\"java.util.concurrent.BlockingQueue:contains()\",\"value\":1,\"children\":{},\"label\":\"BlockingQueue:contains()\",\"className\":\"java.util.concurrent.BlockingQueue\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35258\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:unlock()\",\"value\":5,\"children\":{\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getUseLock()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isPoolSweeperEnabled()\":true,\"java.util.concurrent.locks.ReentrantReadWriteLock:writeLock()\":true,\"java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock:unlock()\":true},\"label\":\"PooledConnection:unlock()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35253\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:getTimestamp()\",\"value\":1,\"children\":{},\"label\":\"PooledConnection:getTimestamp()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"1379\",\"name\":\"java.lang.System:currentTimeMillis()\",\"value\":1,\"children\":{},\"label\":\"System:currentTimeMillis()\",\"className\":\"java.lang.System\",\"acdcCluster\":\"org.apache.catalina.ssi.ss\"},{\"id\":\"35613\",\"name\":\"java.util.concurrent.BlockingQueue:remove()\",\"value\":1,\"children\":{},\"label\":\"BlockingQueue:remove()\",\"className\":\"java.util.concurrent.BlockingQueue\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34693\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:abandon()\",\"value\":16,\"children\":{\"org.apache.tomcat.jdbc.pool.PooledConnection:lock()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:getStackTrace()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isLogAbandoned()\":true,\"java.lang.StringBuilder:<init>()\":true,\"java.lang.StringBuilder:append()\":true,\"java.lang.StringBuilder:toString()\":true,\"org.apache.juli.logging.Log:warn()\":true,\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool:notify()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:release()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:unlock()\":true},\"label\":\"ConnectionPool:abandon()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34694\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:suspect()\",\"value\":21,\"children\":{\"org.apache.tomcat.jdbc.pool.PooledConnection:isSuspect()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:lock()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:getStackTrace()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isLogAbandoned()\":true,\"java.lang.StringBuilder:<init>()\":true,\"java.lang.StringBuilder:append()\":true,\"java.lang.System:currentTimeMillis()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:getTimestamp()\":true,\"java.lang.StringBuilder:toString()\":true,\"org.apache.juli.logging.Log:warn()\":true,\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool:notify()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:setSuspect()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:unlock()\":true},\"label\":\"ConnectionPool:suspect()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"184\",\"name\":\"org.apache.juli.logging.Log:debug()\",\"value\":1,\"children\":{},\"label\":\"Log:debug()\",\"className\":\"org.apache.juli.logging.Log\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"191\",\"name\":\"org.apache.juli.logging.Log:warn()\",\"value\":1,\"children\":{},\"label\":\"Log:warn()\",\"className\":\"org.apache.juli.logging.Log\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"35066\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:getUseLock()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:getUseLock()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35061\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isPoolSweeperEnabled()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:isPoolSweeperEnabled()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"1530\",\"name\":\"java.util.concurrent.locks.ReentrantReadWriteLock:writeLock()\",\"value\":1,\"children\":{},\"label\":\"ReentrantReadWriteLock:writeLock()\",\"className\":\"java.util.concurrent.locks.ReentrantReadWriteLock\",\"acdcCluster\":\"org.apache.tomcat.dbcp.pool2.ss\"},{\"id\":\"3516\",\"name\":\"java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock:lock()\",\"value\":1,\"children\":{},\"label\":\"ReentrantReadWriteLock$WriteLock:lock()\",\"className\":\"java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock\",\"acdcCluster\":\"org.apache.tomcat.dbcp.pool2.ss\"},{\"id\":\"3517\",\"name\":\"java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock:unlock()\",\"value\":1,\"children\":{},\"label\":\"ReentrantReadWriteLock$WriteLock:unlock()\",\"className\":\"java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock\",\"acdcCluster\":\"org.apache.tomcat.dbcp.pool2.ss\"},{\"id\":\"35246\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:getStackTrace()\",\"value\":1,\"children\":{},\"label\":\"PooledConnection:getStackTrace()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35007\",\"name\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration:isLogAbandoned()\",\"value\":1,\"children\":{},\"label\":\"PoolConfiguration:isLogAbandoned()\",\"className\":\"org.apache.tomcat.jdbc.pool.PoolConfiguration\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"169\",\"name\":\"java.lang.StringBuilder:<init>()\",\"value\":1,\"children\":{},\"label\":\"StringBuilder:<init>()\",\"className\":\"java.lang.StringBuilder\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"170\",\"name\":\"java.lang.StringBuilder:append()\",\"value\":1,\"children\":{},\"label\":\"StringBuilder:append()\",\"className\":\"java.lang.StringBuilder\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"171\",\"name\":\"java.lang.StringBuilder:toString()\",\"value\":1,\"children\":{},\"label\":\"StringBuilder:toString()\",\"className\":\"java.lang.StringBuilder\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"35478\",\"name\":\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool:notify()\",\"value\":23,\"children\":{\"java.util.concurrent.atomic.AtomicInteger:incrementAndGet()\":true,\"java.lang.System:currentTimeMillis()\":true,\"java.lang.StringBuilder:<init>()\":true,\"java.lang.StringBuilder:append()\":true,\"java.lang.StringBuilder:toString()\":true,\"javax.management.Notification:<init>()\":true,\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool:sendNotification()\":true,\"java.util.concurrent.ConcurrentLinkedQueue:iterator()\":true,\"java.util.Iterator:hasNext()\":true,\"java.util.Iterator:next()\":true,\"javax.management.NotificationListener:handleNotification()\":true,\"org.apache.juli.logging.Log:isDebugEnabled()\":true,\"org.apache.juli.logging.Log:debug()\":true},\"label\":\"ConnectionPool:notify()\",\"className\":\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.interceptor.ss\"},{\"id\":\"34695\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:release()\",\"value\":10,\"children\":{\"org.apache.tomcat.jdbc.pool.PooledConnection:lock()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:release()\":true,\"java.util.concurrent.atomic.AtomicInteger:addAndGet()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:setHandler()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:unlock()\":true,\"java.util.concurrent.atomic.AtomicInteger:get()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:create()\":true,\"java.util.concurrent.BlockingQueue:offer()\":true},\"label\":\"ConnectionPool:release()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35248\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:isSuspect()\",\"value\":1,\"children\":{},\"label\":\"PooledConnection:isSuspect()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35249\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:setSuspect()\",\"value\":1,\"children\":{},\"label\":\"PooledConnection:setSuspect()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"3591\",\"name\":\"java.util.concurrent.atomic.AtomicInteger:incrementAndGet()\",\"value\":1,\"children\":{},\"label\":\"AtomicInteger:incrementAndGet()\",\"className\":\"java.util.concurrent.atomic.AtomicInteger\",\"acdcCluster\":\"org.apache.tomcat.util.net.ss\"},{\"id\":\"11780\",\"name\":\"javax.management.Notification:<init>()\",\"value\":1,\"children\":{},\"label\":\"Notification:<init>()\",\"className\":\"javax.management.Notification\",\"acdcCluster\":\"org.apache.tomcat.util.modeler.ss\"},{\"id\":\"35682\",\"name\":\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool:sendNotification()\",\"value\":1,\"children\":{},\"label\":\"ConnectionPool:sendNotification()\",\"className\":\"org.apache.tomcat.jdbc.pool.jmx.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.interceptor.ss\"},{\"id\":\"35683\",\"name\":\"java.util.concurrent.ConcurrentLinkedQueue:iterator()\",\"value\":1,\"children\":{},\"label\":\"ConcurrentLinkedQueue:iterator()\",\"className\":\"java.util.concurrent.ConcurrentLinkedQueue\",\"acdcCluster\":\"org.apache.tomcat.websocket.ss\"},{\"id\":\"31607\",\"name\":\"javax.management.NotificationListener:handleNotification()\",\"value\":1,\"children\":{},\"label\":\"NotificationListener:handleNotification()\",\"className\":\"javax.management.NotificationListener\",\"acdcCluster\":\"org.apache.tomcat.util.modeler.ss\"},{\"id\":\"183\",\"name\":\"org.apache.juli.logging.Log:isDebugEnabled()\",\"value\":1,\"children\":{},\"label\":\"Log:isDebugEnabled()\",\"className\":\"org.apache.juli.logging.Log\",\"acdcCluster\":\"org.apache.tomcat.util.descriptor.web.ss\"},{\"id\":\"35244\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:release()\",\"value\":5,\"children\":{\"org.apache.tomcat.jdbc.pool.PooledConnection:disconnect()\":true,\"org.apache.juli.logging.Log:isDebugEnabled()\":true,\"org.apache.juli.logging.Log:debug()\":true,\"java.util.concurrent.atomic.AtomicBoolean:compareAndSet()\":true},\"label\":\"PooledConnection:release()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"3513\",\"name\":\"java.util.concurrent.atomic.AtomicInteger:addAndGet()\",\"value\":1,\"children\":{},\"label\":\"AtomicInteger:addAndGet()\",\"className\":\"java.util.concurrent.atomic.AtomicInteger\",\"acdcCluster\":\"org.apache.tomcat.util.net.ss\"},{\"id\":\"35263\",\"name\":\"org.apache.tomcat.jdbc.pool.PooledConnection:setHandler()\",\"value\":3,\"children\":{\"org.apache.tomcat.jdbc.pool.JdbcInterceptor:reset()\":true,\"org.apache.tomcat.jdbc.pool.JdbcInterceptor:getNext()\":true},\"label\":\"PooledConnection:setHandler()\",\"className\":\"org.apache.tomcat.jdbc.pool.PooledConnection\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"1539\",\"name\":\"java.util.concurrent.atomic.AtomicInteger:get()\",\"value\":1,\"children\":{},\"label\":\"AtomicInteger:get()\",\"className\":\"java.util.concurrent.atomic.AtomicInteger\",\"acdcCluster\":\"org.apache.tomcat.util.net.ss\"},{\"id\":\"34708\",\"name\":\"org.apache.tomcat.jdbc.pool.ConnectionPool:create()\",\"value\":4,\"children\":{\"java.util.concurrent.atomic.AtomicInteger:incrementAndGet()\":true,\"org.apache.tomcat.jdbc.pool.ConnectionPool:getPoolProperties()\":true,\"org.apache.tomcat.jdbc.pool.PooledConnection:<init>()\":true},\"label\":\"ConnectionPool:create()\",\"className\":\"org.apache.tomcat.jdbc.pool.ConnectionPool\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"35612\",\"name\":\"java.util.concurrent.BlockingQueue:offer()\",\"value\":1,\"children\":{},\"label\":\"BlockingQueue:offer()\",\"className\":\"java.util.concurrent.BlockingQueue\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"},{\"id\":\"34749\",\"name\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy:getPoolProperties()\",\"value\":1,\"children\":{},\"label\":\"DataSourceProxy:getPoolProperties()\",\"className\":\"org.apache.tomcat.jdbc.pool.DataSourceProxy\",\"acdcCluster\":\"org.apache.tomcat.jdbc.pool.ss\"}],\"edges\":[{\"source\":\"34701\",\"target\":\"35009\"},{\"source\":\"34701\",\"target\":\"34984\"},{\"source\":\"34702\",\"target\":\"35240\"},{\"source\":\"34702\",\"target\":\"35069\"},{\"source\":\"35240\",\"target\":\"35031\"},{\"source\":\"34701\",\"target\":\"11901\"},{\"source\":\"34702\",\"target\":\"11901\"},{\"source\":\"34702\",\"target\":\"35614\"},{\"source\":\"34702\",\"target\":\"34681\"},{\"source\":\"34702\",\"target\":\"237\"},{\"source\":\"34702\",\"target\":\"238\"},{\"source\":\"34702\",\"target\":\"35257\"},{\"source\":\"34702\",\"target\":\"35615\"},{\"source\":\"34702\",\"target\":\"35258\"},{\"source\":\"34702\",\"target\":\"35253\"},{\"source\":\"34702\",\"target\":\"1379\"},{\"source\":\"34702\",\"target\":\"34701\"},{\"source\":\"34702\",\"target\":\"35613\"},{\"source\":\"34702\",\"target\":\"34693\"},{\"source\":\"34702\",\"target\":\"34694\"},{\"source\":\"34702\",\"target\":\"184\"},{\"source\":\"34702\",\"target\":\"191\"},{\"source\":\"35257\",\"target\":\"35066\"},{\"source\":\"35257\",\"target\":\"35061\"},{\"source\":\"35257\",\"target\":\"1530\"},{\"source\":\"35257\",\"target\":\"3516\"},{\"source\":\"35258\",\"target\":\"35066\"},{\"source\":\"35258\",\"target\":\"35061\"},{\"source\":\"35258\",\"target\":\"1530\"},{\"source\":\"35258\",\"target\":\"3517\"},{\"source\":\"34693\",\"target\":\"35257\"},{\"source\":\"34693\",\"target\":\"35246\"},{\"source\":\"34693\",\"target\":\"34681\"},{\"source\":\"34693\",\"target\":\"35007\"},{\"source\":\"34693\",\"target\":\"169\"},{\"source\":\"34693\",\"target\":\"170\"},{\"source\":\"34693\",\"target\":\"171\"},{\"source\":\"34693\",\"target\":\"191\"},{\"source\":\"34693\",\"target\":\"35478\"},{\"source\":\"34693\",\"target\":\"34695\"},{\"source\":\"34693\",\"target\":\"35258\"},{\"source\":\"34694\",\"target\":\"35248\"},{\"source\":\"34694\",\"target\":\"35257\"},{\"source\":\"34694\",\"target\":\"35246\"},{\"source\":\"34694\",\"target\":\"34681\"},{\"source\":\"34694\",\"target\":\"35007\"},{\"source\":\"34694\",\"target\":\"169\"},{\"source\":\"34694\",\"target\":\"170\"},{\"source\":\"34694\",\"target\":\"1379\"},{\"source\":\"34694\",\"target\":\"35253\"},{\"source\":\"34694\",\"target\":\"171\"},{\"source\":\"34694\",\"target\":\"191\"},{\"source\":\"34694\",\"target\":\"35478\"},{\"source\":\"34694\",\"target\":\"35249\"},{\"source\":\"34694\",\"target\":\"35258\"},{\"source\":\"35478\",\"target\":\"3591\"},{\"source\":\"35478\",\"target\":\"1379\"},{\"source\":\"35478\",\"target\":\"169\"},{\"source\":\"35478\",\"target\":\"170\"},{\"source\":\"35478\",\"target\":\"171\"},{\"source\":\"35478\",\"target\":\"11780\"},{\"source\":\"35478\",\"target\":\"35682\"},{\"source\":\"35478\",\"target\":\"35683\"},{\"source\":\"35478\",\"target\":\"237\"},{\"source\":\"35478\",\"target\":\"238\"},{\"source\":\"35478\",\"target\":\"31607\"},{\"source\":\"35478\",\"target\":\"183\"},{\"source\":\"35478\",\"target\":\"184\"},{\"source\":\"34695\",\"target\":\"35257\"},{\"source\":\"34695\",\"target\":\"35244\"},{\"source\":\"34695\",\"target\":\"3513\"},{\"source\":\"34695\",\"target\":\"35263\"},{\"source\":\"34695\",\"target\":\"35258\"},{\"source\":\"34695\",\"target\":\"1539\"},{\"source\":\"34695\",\"target\":\"34708\"},{\"source\":\"34695\",\"target\":\"35612\"},{\"source\":\"34799\",\"target\":\"34749\"},{\"source\":\"34799\",\"target\":\"35069\"},{\"source\":\"34818\",\"target\":\"34749\"},{\"source\":\"34818\",\"target\":\"35009\"},{\"source\":\"34827\",\"target\":\"34749\"},{\"source\":\"34827\",\"target\":\"35031\"},{\"source\":\"34843\",\"target\":\"34749\"},{\"source\":\"34843\",\"target\":\"34984\"},{\"source\":\"35488\",\"target\":\"34702\"}],\"groups\":[{\"id\":\"cluster\",\"title\":\"org.apache.tomcat.jdbc.pool.ConnectionPool.ss7\"}]}");

/***/ })

}]);
//# sourceMappingURL=2780.js.map