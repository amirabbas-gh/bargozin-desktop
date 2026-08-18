import "./index.css";
import { Routes, Route } from "react-router";
import About from "./pages/about";
import DomainTest from "./pages/domain-test";
import Layout from "./components/layout";
import DownloadTest from "./pages/download";
import DockerTest from "./pages/docker";
import { AlertProvider } from "./components/alert";
import { ProxyProvider } from "./context/proxy-context";
import { Toaster } from "sonner";

function App() {
  return (
    <AlertProvider>
      <ProxyProvider>
        <div>
          <Layout>
            <Toaster toastOptions={{
              className: 'toast-item',
            }} />
            <Routes>
              <Route path="/" element={<DomainTest />} />
              <Route path="/about" element={<About />} />
              <Route path="/download" element={<DownloadTest />} />
              <Route path="/docker" element={<DockerTest />} />
            </Routes>
          </Layout>
        </div>
      </ProxyProvider>
    </AlertProvider>
  );
}

export default App;
