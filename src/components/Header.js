import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
    // PDF download - place your CV at public/CV_NazeeraNasharuddin_2026.pdf
    { name: 'Download CV', href: '/Nazeera_Nasharuddin_ATS_CV.pdf' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'var(--midcentury-teal)'
        }}>
          Nazeera Nashar
        </div>

        <nav className="nav-links">
          {navItems.map((item) => {
            const isPdf = typeof item.href === 'string' && item.href.toLowerCase().endsWith('.pdf');
            if (isPdf) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-item"
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => {
            const isPdf = typeof item.href === 'string' && item.href.toLowerCase().endsWith('.pdf');
            if (isPdf) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="mobile-nav-item"
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;