'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const t = translations[language].nav;

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (path) => {
        if (path === '/blog') {
            setActiveSection('blog');
        } else {
            setActiveSection(path.replace('#', ''));
        }
        if (isOpen) setIsOpen(false);
    };

    const getLinkPath = (path) => {
        if (path.startsWith('#') && pathname !== '/') {
            return `/${path}`;
        }
        return path;
    };

    const navLinks = [
        { name: t.home, path: '#home' },
        { name: t.about, path: '#about' },
        { name: t.skills, path: '#skills' },
        { name: t.services, path: '#services' },
        { name: t.projects, path: '#projects' },
        { name: t.blog, path: '/blog' },
        { name: t.contact, path: '#contact' },
    ];

    useEffect(() => {
        if (pathname.includes('/blog')) {
            setActiveSection('blog');
        }

        const handleScroll = () => {
            // Shrink navbar logic
            setIsScrolled(window.scrollY > 50);

            // Active section logic
            const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 110;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const isLinkActive = (path) => {
        if (path === '/blog') return activeSection === 'blog';
        return activeSection === path.replace('#', '');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ 
                y: 0,
                height: isScrolled ? '64px' : '80px',
                backgroundColor: theme === 'dark' 
                    ? (isScrolled ? 'rgba(31, 32, 41, 0.8)' : 'rgba(31, 32, 41, 1)')
                    : (isScrolled ? 'rgba(241, 245, 249, 0.8)' : 'rgba(241, 245, 249, 1)')
            }}
            transition={{ duration: 0.3 }}
            className={`fixed w-full z-[100] border-b border-borderDark transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-lg' : ''}`}
        >
            {/* Integrated Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary origin-left z-20"
                style={{ scaleX }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Link href="/#home" className="text-primary text-2xl font-bold font-heading tracking-wider hover:brightness-110 transition-colors">
                            Portfolio.
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 items-center justify-end space-x-2 lg:space-x-6 h-full">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                className={link.name === 'Contact' ? "ml-4 h-full flex items-center" : "relative group h-full flex items-center"}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                            >
                                {link.name === 'Contact' ? (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={getLinkPath(link.path)}
                                            onClick={() => handleLinkClick(link.path)}
                                            className={`text-primary border border-primary px-5 py-2 rounded-full hover:bg-primary hover:text-background transition-all duration-300 text-sm font-medium tracking-wide whitespace-nowrap ${isLinkActive(link.path) ? 'bg-primary text-background' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        onClick={() => handleLinkClick(link.path)}
                                        className={`transition-colors text-sm font-medium tracking-wide relative h-full flex items-center px-3 whitespace-nowrap group ${isLinkActive(link.path) ? 'text-primary' : 'text-textMain hover:text-primary'}`}
                                    >
                                        <motion.span
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            {link.name}
                                        </motion.span>
                                        {isLinkActive(link.path) && (
                                            <motion.span
                                                layoutId="activeUnderline"
                                                className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-primary z-10"
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            />
                                        )}
                                        {!isLinkActive(link.path) && (
                                            <span className="absolute bottom-[-1px] left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 z-10"></span>
                                        )}
                                    </Link>
                                )}
                            </motion.div>
                        ))}

                        <div className="flex items-center ml-4 space-x-2">
                            <motion.button
                                onClick={toggleLanguage}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-textMain hover:text-primary px-3 py-1.5 focus:outline-none transition-colors text-xs font-bold border border-borderDark rounded-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                aria-label="Toggle Language"
                            >
                                {language === 'fr' ? 'EN' : 'FR'}
                            </motion.button>

                            <motion.button
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-textMain hover:text-primary p-2 focus:outline-none transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                aria-label="Toggle Theme"
                            >
                                <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" className={`transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile menu button and Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-textMain hover:text-primary px-2 py-1 focus:outline-none transition-colors text-xs font-bold border border-borderDark rounded-md"
                            aria-label="Toggle Language"
                        >
                            {language === 'fr' ? 'EN' : 'FR'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="text-textMain hover:text-primary p-2 focus:outline-none transition-colors"
                            aria-label="Toggle Theme"
                        >
                            <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" className={`transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary p-2"
                        >
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-card/95 backdrop-blur-xl border-b border-borderDark absolute w-full left-0 shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                className={link.name === 'Contact' ? "mt-4" : ""}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name === 'Contact' ? (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        onClick={() => handleLinkClick(link.path)}
                                        className={`text-primary border border-primary block px-4 py-2 mx-2 rounded-full text-center text-base font-medium transition-colors ${isLinkActive(link.path) ? 'bg-primary text-background' : 'hover:bg-primary hover:text-white dark:hover:text-gray-900'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        onClick={() => handleLinkClick(link.path)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isLinkActive(link.path) ? 'text-primary bg-primary/10' : 'text-textMain hover:text-primary'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
