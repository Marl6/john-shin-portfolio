import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Header from "../../../components/Header/Header";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#8A2BE2",
          colorLink: "#1E90FF",
        },
      }}
    >
      <Router basename="/john-shin-portfolio">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </Router>
    </ConfigProvider>
  );
}

export default App;