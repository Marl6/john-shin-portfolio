import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo/john-shin-logo-resized2.png";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "") || "home";

  const navItems = useMemo(
    () => [
      { name: "HOME", key: "home" },
      { name: "ABOUT", key: "about" },
      { name: "MOVIE", key: "movie" },
      { name: "MY BOOK", key: "my-book" },
      { name: "EVENT", key: "event" },
      { name: "JSTV", key: "jstv" },
      { name: "BOOK ME", key: "bookme" },
      { name: "CONTACT", key: "contact" },
    ],
    []
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/home">
          <img
            src={logo}
            alt="John Shin Logo"
            className="w-14 cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={`/${item.key}`}
              className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors relative
                ${
                  currentPath === item.key
                    ? "text-[#ef7e45]"
                    : "text-black hover:text-[#ef7e45]"
                }`}
            >
              {item.name}
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-bottom transition-transform duration-300
                  ${
                    currentPath === item.key
                      ? "bg-[#ef7e45] scale-x-100"
                      : "bg-[#ef7e45] scale-x-0 group-hover:scale-x-100"
                  }`}
              />
            </Link>
          ))}
        </div>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </nav>
  );
};

export default Header;
