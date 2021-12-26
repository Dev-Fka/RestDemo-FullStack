import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar>
      </Navbar>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;
