import Layout from "./hoc/Layout/Layout";
import DashBoard from "./containers/DashBoard/DashBoard";

function App() {
  return (
    <div>
      <Layout>
        <DashBoard />
      </Layout>
    </div>
  );
}

export default App;
