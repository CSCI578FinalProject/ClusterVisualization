import { Table, Input, Button, Icon, Layout, Typography } from 'antd';
import Highlighter from 'react-highlight-words';
import Link from 'next/link';
import TextArea from 'antd/lib/input/TextArea';
// Modified from sample code at https://ant.design/components/table/

const { Header, Content } = Layout;
const { Title, Text } = Typography;

class Index extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    traitText: ''
  };

  columns = [];

  constructor(props) {
    super(props);
    this.columns = this.generateColumns();
  }

  generateColumns = () => {
    return [
      {
        title: 'Cluster',
        dataIndex: 'cluster',
        key: 'cluster',
        ...this.getColumnSearchProps('cluster')
      },
      {
        title: 'Elements',
        dataIndex: 'elements',
        key: 'elements',
        ...this.getColumnSearchProps('elements')
      },
      {
        title: 'Score',
        dataIndex: 'score',
        key: 'score'
      },
      {
        title: 'ACDC Clusters',
        dataIndex: 'relatedClusters',
        key: 'relatedClusters',
        ...this.getColumnSearchProps('relatedClusters')
      },
      {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 150,
        render: (text, record) => (
          <span>
            <Link href={`/visualization?id=${record.id}`}>
              <a target="_blank">Visualize</a>
            </Link>
          </span>
        )
      }
    ];
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleTextEnter = e => {
    this.setState({
      traitText: e.target.value
    });
    e.preventDefault();
  };

  parseTraitText = traitText => {
    const lines = traitText.split('\n');
    const result = {};
    for (const line of lines) {
      const parts = line.split(' : ');

      if (parts.length !== 3) {
        continue;
      }

      const clusterName = parts[0];
      const score = Number.parseFloat(parts[1]);
      const relatedClusters = parts[2];

      if (score === 0) {
        continue;
      }

      result[clusterName] = {
        clusterName,
        score,
        relatedClusters
      };
    }
    return result;
  };

  render() {
    const { data } = this.props;
    const { traitText } = this.state;
    const traitResult = this.parseTraitText(traitText);
    const dataSource = [];

    // Creates data source
    for (let key of Object.keys(data)) {
      if (!traitResult[data[key].cluster]) {
        continue;
      }
      const clusterName = data[key].cluster;
      const clusterId = data[key].id;
      const elements = data[key].elements.join('\n');
      const traitItem = traitResult[clusterName];

      dataSource.push({
        key: clusterId,
        id: clusterId,
        cluster: clusterName,
        score: traitItem.score,
        relatedClusters: traitItem.relatedClusters,
        elements
      });
    }

    dataSource.sort((lhs, rhs) => {
      return rhs.score - lhs.score;
    });

    return (
      <Layout>
        <Header
          style={{
            padding: '0.5rem'
          }}
        >
          <Title
            style={{
              textAlign: 'center',
              color: '#fff'
            }}
          >
            Cluster Visualization
          </Title>
        </Header>
        <Content
          style={{
            margin: '2rem',
            background: '#fff',
            padding: '1rem'
          }}
        >
          <section
            style={{
              marginBottom: '1rem'
            }}
          >
            <Title level={4}>Results from Trait Engine</Title>
            <Text type="secondary">Press enter to parse results</Text>
            <TextArea
              rows={4}
              onPressEnter={this.handleTextEnter}
              allowClear
              placeholder={
                'Please copy and paste results from cluster relation and press enter on finish'
              }
            ></TextArea>
          </section>
          <section>
            <Title level={4}>Clusters</Title>
            <Table
              style={{
                maxHeight: '80vh'
              }}
              columns={this.columns}
              dataSource={dataSource}
              scroll={{ x: 1200 }}
            ></Table>
          </section>
        </Content>
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const data = await import('../parser/cluster.json');
  return { data: data['default'] };
};

export default Index;
