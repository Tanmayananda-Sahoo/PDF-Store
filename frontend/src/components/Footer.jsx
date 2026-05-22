import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Explore': [
      { label: 'Store', path: '/store' },
      { label: 'Categories', path: '/categories' },
      { label: 'New Releases', path: '/store' },
      { label: 'Bestsellers', path: '/store' },
    ],
    'Company': [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/about' },
      { label: 'Press', path: '/about' },
      { label: 'Blog', path: '/about' },
    ],
    'Support': [
      { label: 'Help Center', path: '/about' },
      { label: 'Contact', path: '/about' },
      { label: 'Refund Policy', path: '/about' },
      { label: 'FAQ', path: '/about' },
    ],
  };

  return (
    <footer className="footer" id="site-footer">
      {/* Newsletter Section */}
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__newsletter-inner">
            <div className="footer__newsletter-text">
              <h3 className="text-h3">Stay in the loop</h3>
              <p className="text-body">Get notified about new releases, deals, and reading recommendations.</p>
            </div>
            <form className="footer__newsletter-form" id="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="footer__input-wrap">
                <HiOutlineMail size={18} className="footer__input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer__input"
                  id="newsletter-email"
                />
              </div>
              <button type="submit" className="btn btn--dark" id="newsletter-submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="10" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08" />
                  <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="6" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>PageVault</span>
              </Link>
              <p className="text-small footer__desc">
                Your premium destination for digital books. Instant delivery, beautiful formatting, and an ever-growing library.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__social" aria-label="Twitter">
                  <FaXTwitter size={16} />
                </a>
                <a href="#" className="footer__social" aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="footer__social" aria-label="LinkedIn">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer__col">
                <h4 className="footer__col-title">{title}</h4>
                <ul className="footer__col-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="footer__col-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="text-small">© {currentYear} PageVault. All rights reserved.</p>
            <div className="footer__bottom-links">
              <a href="#" className="text-small">Privacy Policy</a>
              <a href="#" className="text-small">Terms of Service</a>
              <a href="#" className="text-small">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
