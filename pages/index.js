import { Table, Input, Button, Icon, Layout, Typography } from 'antd';
import Highlighter from 'react-highlight-words';
import Link from 'next/link';
// Modified from sample code at https://ant.design/components/table/

const { Header, Content } = Layout;
const { Title } = Typography;

class Index extends React.Component {
  state = {
    searchText: '',
    searchedColumn: ''
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

  render() {
    const { data } = this.props;
    const dataSource = [];
    for (let key of Object.keys(data)) {
      dataSource.push({
        key: data[key].id,
        id: data[key].id,
        cluster: data[key].cluster,
        elements: data[key].elements.join('\n')
      });
    }

    const columns = [
      {
        title: 'Functional Sections',
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
          <Table
            style={{
              maxHeight: '80vh'
            }}
            columns={columns}
            dataSource={dataSource}
            scroll={{ x: 1200 }}
          ></Table>
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
