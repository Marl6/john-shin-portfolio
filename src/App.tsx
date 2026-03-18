import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
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
import React from "react";

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
    <div className="relative min-h-screen bg-brand-cream text-brand-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main className="w-full pt-20">
        {Object.entries(sectionComponents).map(([key, Component]) =>
          React.cloneElement(Component as React.ReactElement, { key }),
        )}
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
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;
