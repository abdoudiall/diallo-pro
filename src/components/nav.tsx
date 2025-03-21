'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Barre de progression */}
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-blue-500/20 origin-top z-50"
        style={{ scaleY }}
      />

      {/* Navigation latérale avec points */}
      <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-end space-y-6"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="relative group"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute right-0 w-8 h-8 flex items-center justify-center">
                <motion.span 
                  className={`block rounded-full transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'w-3 h-3 bg-blue-500'
                      : 'w-2 h-2 bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-400'
                  }`}
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              </span>
              <span 
                className={`absolute right-full mr-6 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-lg text-sm whitespace-nowrap transition-all duration-300 transform ${
                  activeSection === item.href.slice(1)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {item.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Navigation supérieure pour mobile */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-end h-16">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`text-sm font-medium transition-colors relative ${
                      activeSection === item.href.slice(1)
                        ? 'text-blue-500'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
} 