import "./App.scss";
import { InfoProvider } from "./context/InfoProvider";
import Layout from "./layout";
import Home from "./pages/Home";

function App() {
  return (
    <InfoProvider>
      <Layout>
        <Home />
      </Layout>
    </InfoProvider>
  );
}

export default App;
