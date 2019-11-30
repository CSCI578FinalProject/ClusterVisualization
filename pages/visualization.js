import { useRouter } from 'next/router';
import { Table, Input, Button, Icon, Layout, Typography } from 'antd';
import dynamic from 'next/dynamic';
const ClusterGraph = dynamic(import('../components/ClusterGraph'), {
  ssr: false
});

function Visualization(props) {
  const { data, error } = props;
  return (
    <div>
      <h1>Visualization for {data && data['groups'][0].title}</h1>
      {error && <p>{error}</p>}
      <p>{JSON.stringify(data)}</p>
      <ClusterGraph data={data}></ClusterGraph>
    </div>
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
