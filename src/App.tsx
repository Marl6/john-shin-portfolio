import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Movie from "./pages/Movie/Movie";
import Book from "./pages/Book/Book";
import Event from "./pages/Event/Event";
import JSTV from "./pages/JSTV/JSTV";
import BookMe from "./pages/BookMe/BookMe";
import Contact from "./pages/Contact/Contact";

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
        <div className="relative">
          <Header />
          <main className="w-full">
            <Home />
            <About />
            <Movie />
            <Book />
            <Event />
            <JSTV />
            <BookMe />
            <Contact />
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
