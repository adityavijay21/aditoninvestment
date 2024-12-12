import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './theme-provider';
import { ToggleTheme } from './toggle-theme';
import { Menu, X } from 'lucide-react';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
          <motion.header 
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            className="fixed w-full top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 shadow-sm"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link to="/" className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors">
                  Aditon Advertising
                </Link>
                
                {/* Mobile menu button */}
                <motion.button 
                  className="lg:hidden p-2 hover:bg-muted rounded-full"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isMenuOpen ? "close" : "open"}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>

                {/* Desktop navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                  <ul className="flex space-x-6">
                    {[
                      { path: "/", label: "Home" },
                      { path: "/about", label: "About" },
                      { path: "/how-we-work", label: "How We Work" },
                      { path: "/services", label: "Services" },
                      { path: "/testimonials", label: "Testimonials" },
                      { path: "/contact", label: "Contact" }
                    ].map(({ path, label }) => (
                      <motion.li key={path} whileHover={{ y: -2 }}>
                        <Link 
                          to={path} 
                          className={`hover:text-primary transition-colors relative py-2
                            ${location.pathname === path ? 'text-primary font-medium' : ''}
                          `}
                        >
                          {label}
                          {location.pathname === path && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                              layoutId="underline"
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <ToggleTheme />
                </div>
              </div>

              {/* Mobile navigation */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="lg:hidden overflow-hidden"
                  >
                    <ul className="flex flex-col space-y-2 pt-4">
                      {[
                        { path: "/", label: "Home" },
                        { path: "/about", label: "About" },
                        { path: "/how-we-work", label: "How We Work" },
                        { path: "/services", label: "Services" },
                        { path: "/testimonials", label: "Testimonials" },
                        { path: "/contact", label: "Contact" }
                      ].map(({ path, label }) => (
                        <motion.li 
                          key={path}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link 
                            to={path} 
                            className={`block py-2 hover:text-primary transition-colors
                              ${location.pathname === path ? 'text-primary font-medium' : ''}
                            `}
                          >
                            {label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-4 pb-4">
                      <ToggleTheme />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.header>
          <main className="flex-grow pt-[73px]">
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
    </>
  );
};

export default Layout;
