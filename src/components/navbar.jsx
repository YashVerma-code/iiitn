import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import navItems from "../data/navlinks.js";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-start">
          <div className="flex gap-10 items-center">
            <span className="hidden md:block cursor-pointer">
              <Link to="/">
                <img src="/logo.png" alt="main logo" className="h-20 w-auto" />
              </Link>
            </span>
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
              </h1>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Indian Institute of Information Technology, Nagpur
              </h2>
              <p className="text-sm md:text-base text-red-600 hidden md:block">
                An Institution of National Importance By An Act of Parliament
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-3 md:mt-0">
            <img
              src="/home/second-logo.jpg"
              alt="second logo"
              className="h-20 w-auto"
            />
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-30 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            <span>
              <Link to="/">
                <img src="/logo.png" alt="main logo" className="h-14 w-auto" />
              </Link>
            </span>
            <div className="hidden xl:flex gap-4 text-gray-900 relative">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="relative flex items-center gap-2 px-2 py-2 transition-all duration-300 ease-in-out rounded-md hover:bg-orange-100 hover:shadow-md"
                  >
                    {item.label}
                    {item.subLinks && <ChevronDown size={16} />}
                  </a>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: activeDropdown === item.href ? 1 : 0,
                      y: activeDropdown === item.href ? 0 : 10,
                    }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute ${
                      item.alignRight ? "right-0" : "left-0"
                    } mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.href ? "visible" : "invisible"
                    }`}
                  >
                    {item.subLinks &&
                      item.subLinks.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-gray-900 hover:bg-blue-100 transition-colors duration-300"
                        >
                          {sub.label}
                        </a>
                      ))}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <div
                      className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.href ? null : item.href
                        )
                      }
                    >
                      <a href={item.href}>{item.label}</a>
                      {item.subLinks && <ChevronDown size={16} />}
                    </div> 
                    <AnimatePresence>
                      {activeDropdown === item.href && item.subLinks && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-6 space-y-2"
                        >
                          {item.subLinks.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-gray-900 hover:bg-blue-100 transition-colors duration-300"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
