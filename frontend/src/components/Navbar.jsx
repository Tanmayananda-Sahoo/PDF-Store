import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineSearch, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/store', label: 'Store' },
    { path: '/categories', label: 'Categories' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="logo-link">
          <div className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
              <rect x="10" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08" />
              <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" />
              <line x1="6" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="navbar__logo-text">PageVault</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <button className="navbar__action-btn" id="search-btn" aria-label="Search">
            <HiOutlineSearch size={20} />
          </button>
          <button className="navbar__action-btn navbar__cart-btn" id="cart-btn" aria-label="Cart">
            <HiOutlineShoppingBag size={20} />
            <span className="navbar__cart-count">3</span>
          </button>
          <Link to="/login" className="navbar__login-link" id="login-link">
            Log in
          </Link>
          <Link to="/register" className="btn btn--dark btn--sm navbar__cta" id="get-started-btn">
            Get Started
          </Link>
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`} id="mobile-menu">
        <div className="navbar__mobile-inner">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/store" className="btn btn--dark btn--lg" style={{ marginTop: '1rem', width: '100%' }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
