import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/john-shin-logo-resized2.png";
import useActiveSection from "../../hooks/useActiveSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Home", key: "home" },
      { name: "About", key: "about" },
      { name: "Film", key: "movie" },
      { name: "Book", key: "my-book" },
      { name: "Events", key: "event" },
      { name: "JSTV", key: "jstv" },
      { name: "Speaking", key: "bookme" },
      { name: "Contact", key: "contact" },
    ],
    [],
  );

  // Get all section IDs for the Observer
  const sectionIds = useMemo(
    () => navItems.map((item) => item.key),
    [navItems],
  );

  // Use the custom hook to track which section is in view
  const activeSection = useActiveSection(sectionIds, 0.09);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand bg-brand-card/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>
            <span className="sr-only">Go to home</span>
            <img
              src={logo}
              alt="John Shin Logo"
              className="w-14 cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`/${item.key}`}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors
                  ${
                    activeSection === item.key
                      ? "text-brand-accent"
                      : "text-brand-ink hover:text-brand-accent"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Work With John
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand text-brand-ink"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "X" : "="}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="lg:hidden pb-4">
            <div className="grid gap-1 rounded-xl border border-brand bg-white p-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={`/${item.key}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors
                    ${
                      activeSection === item.key
                        ? "bg-brand-accent-soft text-brand-accent"
                        : "text-brand-ink hover:bg-brand-accent-soft"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-md bg-brand-accent px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Work With John
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
