import { useRouter } from 'next/router';
import { Layout, Typography, List, Collapse } from 'antd';
import path from 'path';
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Item } = List;
const { Panel } = Collapse;
import dynamic from 'next/dynamic';
const ClusterGraph = dynamic(import('../components/ClusterGraph'), {
  ssr: false
});

const CLUSTER_ID = 'cluster';

function Visualization(props) {
  const { data, error } = props;
  const nodes = data.nodes;
  const listData = nodes.map(node => ({
    label: node.label,
    id: node.id,
    groupId: node.groupId,
    className: node.className
  }));

  const clusterListData = listData.filter(item => item.groupId === CLUSTER_ID);
  const neighborListData = listData.filter(item => item.groupId !== CLUSTER_ID);
  const relatedACDCClusters = data.relatedACDCClusters;
  const acdcClusterListData = Object.keys(relatedACDCClusters).map(
    key => relatedACDCClusters[key]
  );
  const usedClasses = {};
  for (let node of clusterListData) {
    usedClasses[node.className] = true;
  }

  return (
    <Layout>
      <Header
        style={{
          padding: '0.5rem',
          height: 'auto',
          margin: 0
        }}
      >
        <Title
          style={{
            textAlign: 'center',
            color: '#fff'
          }}
        >
          Visualization for {data && data['groups'][0].title}
        </Title>
      </Header>
      <Content style={{ padding: '1rem' }}>
        <Layout style={{ background: '#fff' }}>
          <Sider
            width={300}
            style={{ background: '#fff', padding: '0.25rem 0.5rem' }}
          >
            <Collapse bordered={false} defaultActiveKey="1">
              <Panel header="Elements" key="1">
                <div style={{ maxHeight: 400, overflow: 'auto' }}></div>
                {clusterListData.map(item => {
                  return (
                    <Item key={item.id}>
                      <Text>{item.label}</Text>
                    </Item>
                  );
                })}
              </Panel>
              <Panel header="ACDC Clusters" key="2">
                <div style={{ maxHeight: 400, overflow: 'auto' }}>
                  <Collapse bordered={false}>
                    {acdcClusterListData.map(item => {
                      return (
                        <Panel key={item.id} header={item.cluster}>
                          <div>
                            {item.elements.map(element => {
                              return (
                                <Item key={element}>
                                  <Text
                                    mark={!!usedClasses[element]}
                                    style={{ maxWidth: '100%' }}
                                  >
                                    {element}
                                  </Text>
                                </Item>
                              );
                            })}
                          </div>
                        </Panel>
                      );
                    })}
                  </Collapse>
                </div>
              </Panel>
              <Panel header="Neighbors" key="3">
                <div style={{ maxHeight: 400, overflow: 'auto' }}>
                  {neighborListData.map(item => {
                    return (
                      <Item key={item.id}>
                        <Text>{item.label}</Text>
                      </Item>
                    );
                  })}
                </div>
              </Panel>
            </Collapse>
          </Sider>
          <Content
            style={{
              padding: '1rem',
              minHeight: 280
            }}
          >
            {error && (
              <Title
                style={{
                  textAlign: 'center'
                }}
                type="danger"
              >
                {error}
              </Title>
            )}
            {!error && (
              <ClusterGraph
                data={data}
                style={{
                  border: '1px solid black'
                }}
              ></ClusterGraph>
            )}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

Visualization.getInitialProps = async function(context) {
  const { id } = context.query;
  let error = '';
  let data = null;
  if (!id) {
    error = 'Please provide an id for visualization';
  } else {
    data = await import(`../parser/cluster-graph/${id}.json`);
  }
  return { data: data ? data['default'] : null, error };
};

export default Visualization;
