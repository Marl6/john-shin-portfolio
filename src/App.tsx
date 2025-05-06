import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Movie from "./pages/Movie/Movie";
import Book from "./pages/Book/Book";
import Event from "./pages/Event/Event";
import JSTV from "./pages/JSTV/JSTV";
import BookMe from "./pages/BookMe/BookMe";
import Contact from "./pages/Contact/Contact";

const sectionComponents: Record<string, React.ReactNode> = {
  home: <Home />,
  about: <About />,
  movie: <Movie />,
  "my-book": <Book />,
  event: <Event />,
  jstv: <JSTV />,
  bookme: <BookMe />,
  contact: <Contact />,
};

function ScrollToSection() {
  const location = useLocation();
  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return null;
}

function AppContent() {
  return (
    <div className="relative">
      <Header />
      <main className="w-full">
        {Object.values(sectionComponents)}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {Object.keys(sectionComponents).map((key) => (
            <Route key={key} path={`/${key}`} element={null} />
          ))}
        </Routes>
        <ScrollToSection />
      </main>
      <Footer />
    </div>
  );
}

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
      <Router basename="">
        <AppContent />
      </Router>
    </ConfigProvider>
  );
}

export default App;
