import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, subLinks } from '../../data/navLinks';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  to: string;
}

interface SubLink {
  name: string;
  link: string;
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-nav-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-white hover:text-gray-300 focus:outline-none transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 h-full w-72 bg-gray-900 border-r border-gray-800 z-50 shadow-2xl overflow-y-auto mobile-nav-container"
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-white">
                    Navigation
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link: NavLink) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.to)}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                    More
                  </h3>
                  <div className="space-y-1">
                    {subLinks.map((link: SubLink) => (
                      <a
                        key={link.name}
                        href={link.link}
                        className="block px-4 py-2.5 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
