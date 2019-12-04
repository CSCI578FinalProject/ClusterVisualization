import { useRouter } from 'next/router';
import { Layout, Typography, List } from 'antd';
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Item } = List;
import dynamic from 'next/dynamic';
const ClusterGraph = dynamic(import('../components/ClusterGraph'), {
  ssr: false
});

const CLUSTER_ID = 'cluster';

function Visualization(props) {
  const { data, error } = props;
  const nodes = data.nodes;
  for (let node of nodes) {
    if (!node.groupId) {
      console.log(node);
    }
  }
  const listData = nodes.map(node => ({
    label: node.label,
    id: node.id,
    groupId: node.groupId
  }));
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
            <Title
              level={4}
              style={{
                width: 250
              }}
            >
              Elements
            </Title>
            <div
              style={{
                maxHeight: 400,
                overflow: 'auto'
              }}
            >
              {listData
                .filter(item => item.groupId === CLUSTER_ID)
                .map(item => {
                  return (
                    <Item key={item.id}>
                      <Text>{item.label}</Text>
                    </Item>
                  );
                })}
            </div>
            <Title
              level={4}
              style={{
                width: 250
              }}
            >
              Neighbors
            </Title>
            <div
              style={{
                maxHeight: 400,
                overflow: 'auto'
              }}
            >
              {listData
                .filter(item => item.groupId !== CLUSTER_ID)
                .map(item => {
                  return (
                    <Item key={item.id}>
                      <Text>{item.label}</Text>
                    </Item>
                  );
                })}
            </div>
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
