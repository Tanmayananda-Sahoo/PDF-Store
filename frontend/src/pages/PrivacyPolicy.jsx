import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineInformationCircle, HiOutlineShieldCheck, HiOutlineDatabase, HiOutlineUserCircle } from 'react-icons/hi';
import './Policy.css';

const PrivacyPolicy = () => {
  return (
    <main className="policy" id="privacy-page">
      {/* Header */}
      <section className="policy__header">
        <div className="container">
          <div className="policy__header-content">
            <span className="badge badge--accent animate-fade-in-up">Legal</span>
            <h1 className="text-hero policy__title animate-fade-in-up animate-delay-1">
              Privacy Policy
            </h1>
            <p className="text-body policy__subtitle animate-fade-in-up animate-delay-2">
              We collect only what we need, protect it carefully, and never sell your data. Here's exactly how your information is handled.
            </p>

            <div className="policy__meta animate-fade-in-up animate-delay-3">
              <div className="policy__meta-item">
                <span className="policy__meta-label">Effective</span>
                <span className="policy__meta-value">January 1, 2026</span>
              </div>
              <div className="policy__meta-item">
                <span className="policy__meta-label">Last updated</span>
                <span className="policy__meta-value">May 28, 2026</span>
              </div>
              <div className="policy__meta-item">
                <span className="policy__meta-label">GDPR & CCPA</span>
                <span className="policy__meta-value">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container">
          <div className="policy__body">
            <aside className="policy__toc">
              <span className="policy__toc-title">On this page</span>
              <a href="#overview">Overview</a>
              <a href="#collect">What we collect</a>
              <a href="#use">How we use it</a>
              <a href="#cookies">Cookies & tracking</a>
              <a href="#sharing">Sharing</a>
              <a href="#rights">Your rights</a>
              <a href="#security">Security</a>
              <a href="#contact">Contact</a>
            </aside>

            <div className="policy__content">
              <section className="policy__section" id="overview">
                <h2>1. Overview</h2>
                <p>
                  This Privacy Policy describes how PageVault ("we", "us", or "our") collects, uses, and shares information when you use our website, applications, and services (collectively, the "Services"). By using our Services, you agree to the practices described here.
                </p>
                <p>
                  We've written this policy in plain language. If anything is unclear, please reach out — we're always happy to explain.
                </p>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineShieldCheck size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Our commitment</strong>
                    <p>We do not sell, rent, or trade your personal information to third-party marketers — ever.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="collect">
                <h2>2. What we collect</h2>
                <h3>Information you give us</h3>
                <ul>
                  <li><strong>Account information:</strong> name, email address, and password (stored hashed) when you create an account.</li>
                  <li><strong>Payment information:</strong> billing details processed by our PCI-compliant payment partners. We never see or store your full card number.</li>
                  <li><strong>Communications:</strong> anything you send us via support, contact forms, or surveys.</li>
                </ul>

                <h3>Information we collect automatically</h3>
                <ul>
                  <li><strong>Device & usage:</strong> IP address, browser type, operating system, referring URL, and pages visited.</li>
                  <li><strong>Reading activity:</strong> books purchased, downloads, and reading progress (synced across your devices when signed in).</li>
                  <li><strong>Cookies and similar technologies:</strong> see the cookies section below.</li>
                </ul>

                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineDatabase size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Minimal data</strong>
                    <p>We follow the principle of data minimization — we collect only what we need to provide and improve our Services.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="use">
                <h2>3. How we use your information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Process transactions and deliver your purchased books.</li>
                  <li>Maintain and improve the security of your account.</li>
                  <li>Provide personalized recommendations and reading lists.</li>
                  <li>Send transactional emails (order confirmations, receipts, security alerts).</li>
                  <li>Send marketing emails — only if you've opted in, with an unsubscribe link in every message.</li>
                  <li>Detect and prevent fraud, abuse, and violations of our Terms.</li>
                  <li>Comply with legal obligations and respond to lawful requests.</li>
                </ul>
                <p>We do not use your reading history to build advertising profiles or share data with third-party ad networks.</p>
              </section>

              <section className="policy__section" id="cookies">
                <h2>4. Cookies and tracking</h2>
                <p>We use a small set of cookies and similar technologies. They fall into three categories:</p>
                <ul>
                  <li><strong>Essential:</strong> required for sign-in, cart, and checkout. These cannot be disabled.</li>
                  <li><strong>Functional:</strong> remember preferences such as your theme and reading settings.</li>
                  <li><strong>Analytics:</strong> anonymized usage data that helps us understand which features are most useful. You can opt out at any time.</li>
                </ul>
                <p>We do not use third-party advertising cookies on PageVault.</p>
              </section>

              <section className="policy__section" id="sharing">
                <h2>5. Sharing your information</h2>
                <p>We share information only in the following limited circumstances:</p>
                <ul>
                  <li><strong>Service providers:</strong> vendors who help us run the Services (payment processing, email delivery, cloud hosting) under strict confidentiality agreements.</li>
                  <li><strong>Authors and publishers:</strong> aggregated, anonymized sales data — never personal information.</li>
                  <li><strong>Legal:</strong> when required by law, court order, or to protect our rights and the safety of our users.</li>
                  <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets, with notice to affected users.</li>
                </ul>
                <p>We will never share your information with third-party marketers.</p>
              </section>

              <section className="policy__section" id="rights">
                <h2>6. Your rights</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> request a copy of the data we hold about you.</li>
                  <li><strong>Correction:</strong> update or correct inaccurate information.</li>
                  <li><strong>Deletion:</strong> request that we delete your account and associated data.</li>
                  <li><strong>Portability:</strong> receive your data in a machine-readable format.</li>
                  <li><strong>Opt-out:</strong> unsubscribe from marketing communications at any time.</li>
                  <li><strong>Object:</strong> object to certain processing activities, including analytics.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <strong>privacy@pagevault.com</strong>. We respond to all verified requests within 30 days.</p>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineUserCircle size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Regional rights</strong>
                    <p>EU and UK residents have additional rights under the GDPR. California residents have additional rights under the CCPA. We honor all of these.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="security">
                <h2>7. Security</h2>
                <p>
                  We use industry-standard technical and organizational measures to protect your information, including:
                </p>
                <ul>
                  <li>TLS encryption in transit and AES-256 encryption at rest.</li>
                  <li>Regular third-party security audits and penetration testing.</li>
                  <li>Strict access controls — only a small number of authorized personnel can access production systems.</li>
                  <li>Two-factor authentication available for all accounts and required for staff.</li>
                </ul>
                <p>
                  No system is perfectly secure. If you ever suspect unauthorized activity on your account, please contact us immediately.
                </p>
              </section>

              <section className="policy__section" id="contact">
                <h2>8. Contact us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, we'd love to hear from you. You can reach our privacy team at:
                </p>
                <ul>
                  <li><strong>Email:</strong> privacy@pagevault.com</li>
                  <li><strong>Mail:</strong> PageVault Privacy Office, 548 Market Street, Suite 321, San Francisco, CA 94104</li>
                </ul>
                <p>
                  You can also use the <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>Contact page</Link> for general inquiries.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="policy__cta-inner text-center">
            <h2 className="text-h2">Privacy questions?</h2>
            <p className="text-body" style={{ marginTop: '12px', maxWidth: '460px', margin: '12px auto 0' }}>
              Our privacy team is small, responsive, and human. We typically reply within one business day.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn btn--dark btn--lg" id="privacy-cta-btn">
                Get in touch
                <HiOutlineArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
