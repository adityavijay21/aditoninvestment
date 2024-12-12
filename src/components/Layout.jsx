import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeProvider } from "./theme-provider";
import { ToggleTheme } from "./toggle-theme";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Dynamically calculate header height
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    const scrollFunction = () => {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollFunction(), 100); // Allow time for navigation before scrolling
    } else {
      scrollFunction();
    }
    setMobileMenuOpen(false);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b h-20">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Aditon Advertising</Link>
            <div className="flex items-center space-x-6">
              <ul className="hidden md:flex space-x-4">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/how-we-work" className="hover:text-primary transition-colors">How We Work</Link></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-primary transition-colors">Testimonials</button></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
              <ToggleTheme />
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm overflow-y-auto">
              <ul className="flex flex-col p-4 pt-20 space-y-4">
                <li><Link to="/" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                <li><Link to="/how-we-work" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>How We Work</Link></li>
                <li><button onClick={() => scrollToSection("pricing")} className="block py-2 hover:text-primary transition-colors w-full text-left">Pricing</button></li>
                <li><button onClick={() => scrollToSection("testimonials")} className="block py-2 hover:text-primary transition-colors w-full text-left">Testimonials</button></li>
                <li><Link to="/contact" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              </ul>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main
          className="flex-grow pt-20 overflow-x-hidden overflow-y-auto"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
