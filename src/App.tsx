import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ConfigProvider, theme } from "antd";

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
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>

      </Router>
    </ConfigProvider>
  );
}

export default App;
