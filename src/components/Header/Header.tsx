import { useState, useEffect, useMemo } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-scroll';
import logo from "../../assets/img/logo/john-shin-logo-resized2.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { name: 'HOME', key: 'home' },
    { name: 'ABOUT', key: 'about' },
    { name: 'MOVIE', key: 'movie' },
    { name: 'MY BOOK', key: 'my-book' },
    { name: 'EVENT', key: 'event' },
    { name: 'JSTV', key: 'jstv' },
    { name: 'BOOK ME', key: 'bookme' },
    { name: 'CONTACT', key: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.key));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="home" smooth={true} duration={500} offset={-100}>
              <img src={logo} alt="John Shin Logo" className="w-14 cursor-pointer" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.key}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors relative
                    ${activeSection === item.key ? 'text-[#ef7e45]' : 'text-black hover:text-[#ef7e45]'}`}
                  onClick={() => setActiveSection(item.key)}
                >
                  {item.name}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-bottom transition-transform duration-300
                      ${activeSection === item.key ? 'bg-[#ef7e45] scale-x-100' : 'bg-[#ef7e45] scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu
              mode="vertical"
              className="bg-white"
              selectedKeys={[activeSection]}
            >
              {navItems.map((item) => (
                <Menu.Item key={item.key}>
                  <Link
                    to={item.key}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setActiveSection(item.key)}
                  >
                    {item.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;