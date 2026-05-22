import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import './Auth.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="auth" id="login-page">
      <div className="auth__split">
        {/* Left — Branding panel */}
        <div className="auth__brand">
          <div className="auth__brand-content">
            <Link to="/" className="auth__brand-logo">
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="10" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08" />
                <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>PageVault</span>
            </Link>
            <h1 className="auth__brand-headline">
              Your entire library,<br />
              one click away.
            </h1>
            <p className="auth__brand-sub">
              50,000+ premium PDF books. Instant delivery. Beautiful formatting on every device.
            </p>
            <div className="auth__brand-stats">
              <div className="auth__brand-stat">
                <span className="auth__brand-stat-value">2M+</span>
                <span className="auth__brand-stat-label">Readers</span>
              </div>
              <div className="auth__brand-stat">
                <span className="auth__brand-stat-value">4.9</span>
                <span className="auth__brand-stat-label">Rating</span>
              </div>
              <div className="auth__brand-stat">
                <span className="auth__brand-stat-value">150+</span>
                <span className="auth__brand-stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="auth__form-panel">
          <div className="auth__form-wrap">
            <div className="auth__form-header">
              <h2 className="auth__form-title">Welcome back</h2>
              <p className="auth__form-subtitle">Sign in to access your library and continue reading.</p>
            </div>

            <form className="auth__form" id="login-form" onSubmit={handleSubmit}>
              {/* Email */}
              <div className={`auth__field ${focused === 'email' ? 'auth__field--focused' : ''} ${formData.email ? 'auth__field--filled' : ''}`}>
                <label htmlFor="login-email" className="auth__label">Email address</label>
                <div className="auth__input-wrap">
                  <HiOutlineMail size={18} className="auth__input-icon" />
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className="auth__input"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className={`auth__field ${focused === 'password' ? 'auth__field--focused' : ''} ${formData.password ? 'auth__field--filled' : ''}`}>
                <div className="auth__label-row">
                  <label htmlFor="login-password" className="auth__label">Password</label>
                  <a href="#" className="auth__forgot" id="forgot-password-link">Forgot?</a>
                </div>
                <div className="auth__input-wrap">
                  <HiOutlineLockClosed size={18} className="auth__input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused('')}
                    className="auth__input"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="auth__toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    id="toggle-password"
                  >
                    {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn--dark btn--lg auth__submit" id="login-submit">
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="auth__divider">
              <span>or continue with</span>
            </div>

            {/* Social login */}
            <div className="auth__socials">
              <button className="auth__social-btn" id="google-login">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="auth__social-btn" id="github-login">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div>

            {/* Switch to register */}
            <p className="auth__switch">
              Don't have an account?{' '}
              <Link to="/register" className="auth__switch-link" id="go-to-register">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
