import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineInformationCircle, HiOutlineExclamationCircle, HiOutlineClipboardCheck, HiOutlineScale } from 'react-icons/hi';
import './Policy.css';

const TermsOfService = () => {
  return (
    <main className="policy" id="terms-page">
      {/* Header */}
      <section className="policy__header">
        <div className="container">
          <div className="policy__header-content">
            <span className="badge badge--accent animate-fade-in-up">Legal</span>
            <h1 className="text-hero policy__title animate-fade-in-up animate-delay-1">
              Terms of Service
            </h1>
            <p className="text-body policy__subtitle animate-fade-in-up animate-delay-2">
              The rules of the road. By using PageVault, you agree to these terms — we've kept them short and free of legalese.
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
                <span className="policy__meta-label">Governing law</span>
                <span className="policy__meta-value">California, USA</span>
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
              <a href="#acceptance">Acceptance</a>
              <a href="#account">Your account</a>
              <a href="#license">License & use</a>
              <a href="#purchases">Purchases</a>
              <a href="#ip">Intellectual property</a>
              <a href="#conduct">Acceptable use</a>
              <a href="#termination">Termination</a>
              <a href="#liability">Liability</a>
              <a href="#changes">Changes</a>
              <a href="#contact">Contact</a>
            </aside>

            <div className="policy__content">
              <section className="policy__section" id="acceptance">
                <h2>1. Acceptance of terms</h2>
                <p>
                  By creating an account, browsing our store, or making a purchase on PageVault, you agree to be bound by these Terms of Service, our Privacy Policy, and any additional terms that apply to specific features of the Services.
                </p>
                <p>
                  If you do not agree, please do not use the Services. We may update these terms from time to time — continued use after changes means you accept the new terms.
                </p>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineInformationCircle size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Plain English</strong>
                    <p>If any part of these terms is unclear, contact us before agreeing. We'd rather explain than argue later.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="account">
                <h2>2. Your account</h2>
                <p>
                  To access most features, you'll need to create an account. When you do, you agree to:
                </p>
                <ul>
                  <li>Provide accurate, current, and complete information.</li>
                  <li>Keep your password secure and not share your account with others.</li>
                  <li>Notify us immediately if you suspect any unauthorized access.</li>
                  <li>Take responsibility for all activity that occurs under your account.</li>
                </ul>
                <p>
                  You must be at least <strong>13 years old</strong> to use PageVault. If you're under 18, a parent or guardian must agree to these terms on your behalf.
                </p>
              </section>

              <section className="policy__section" id="license">
                <h2>3. License and acceptable use</h2>
                <p>
                  When you purchase a book on PageVault, we grant you a <strong>personal, non-exclusive, non-transferable, revocable license</strong> to:
                </p>
                <ul>
                  <li>Download and store the PDF on your personal devices.</li>
                  <li>Read the book for personal, non-commercial enjoyment.</li>
                  <li>Print pages for personal use, where digital rights permit.</li>
                </ul>
                <p>You may <strong>not</strong>:</p>
                <ul>
                  <li>Resell, redistribute, or sublicense the book to others.</li>
                  <li>Upload the file to file-sharing services, public drives, or torrent networks.</li>
                  <li>Remove watermarks, copyright notices, or DRM protections.</li>
                  <li>Use the content for commercial training of AI models without written permission.</li>
                </ul>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineExclamationCircle size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Enforcement</strong>
                    <p>We use technical and manual methods to detect piracy. Accounts involved in unauthorized distribution will be terminated without refund.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="purchases">
                <h2>4. Purchases, pricing, and taxes</h2>
                <p>
                  All prices are listed in your local currency where supported, otherwise in US Dollars. Applicable taxes are calculated at checkout based on your location.
                </p>
                <ul>
                  <li>Purchases are non-refundable except as outlined in our <Link to="/refund-policy" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>Refund Policy</Link>.</li>
                  <li>Prices may change at any time, but completed transactions are honored at the price paid.</li>
                  <li>Promotional codes cannot be combined and may have expiration dates.</li>
                  <li>You are responsible for providing a valid payment method.</li>
                </ul>
              </section>

              <section className="policy__section" id="ip">
                <h2>5. Intellectual property</h2>
                <p>
                  All content on PageVault — including book PDFs, cover art, descriptions, reviews, and the PageVault brand itself — is the property of PageVault, our authors, or our licensors, and is protected by copyright, trademark, and other laws.
                </p>
                <p>
                  You retain ownership of any original content you submit (such as reviews or comments), but you grant PageVault a worldwide, royalty-free license to use, display, and distribute that content in connection with the Services.
                </p>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineScale size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>DMCA</strong>
                    <p>If you believe your copyright has been infringed, send a takedown notice to dmca@pagevault.com with the required information under 17 U.S.C. § 512(c).</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="conduct">
                <h2>6. Acceptable use</h2>
                <p>When using the Services, you agree not to:</p>
                <ul>
                  <li>Use the Services for any unlawful purpose or in violation of any applicable laws.</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                  <li>Upload viruses, malware, or any code designed to harm our systems or users.</li>
                  <li>Scrape, crawl, or otherwise extract data from the Services at scale without permission.</li>
                  <li>Harass, abuse, or harm other users or our staff.</li>
                </ul>
                <p>
                  We reserve the right to investigate and take appropriate action, including suspending or terminating your account and reporting to law enforcement where warranted.
                </p>
              </section>

              <section className="policy__section" id="termination">
                <h2>7. Termination</h2>
                <p>
                  You may close your account at any time by contacting us. We may suspend or terminate your access to the Services if:
                </p>
                <ul>
                  <li>You breach these Terms or our Privacy Policy.</li>
                  <li>You engage in fraudulent, abusive, or illegal activity.</li>
                  <li>We are required to do so by law.</li>
                  <li>We discontinue the Services (with reasonable notice where possible).</li>
                </ul>
                <p>
                  Upon termination, your license to use downloaded content ends, except for content you've already paid for and accessed in good faith, which you may continue to use for personal, non-commercial reading.
                </p>
              </section>

              <section className="policy__section" id="liability">
                <h2>8. Disclaimers and limitation of liability</h2>
                <p>
                  The Services are provided "as is" and "as available." To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  We do our best to keep the Services running smoothly, but we cannot guarantee uninterrupted access. To the extent permitted by law, our total liability to you for any claim arising from the Services will not exceed the amount you've paid us in the 12 months preceding the claim.
                </p>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineClipboardCheck size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Indemnification</strong>
                    <p>You agree to indemnify PageVault from any claims arising out of your breach of these terms or your misuse of the Services.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="changes">
                <h2>9. Changes to these terms</h2>
                <p>
                  We may update these Terms from time to time. When we do, we'll revise the "Last updated" date at the top. For material changes, we'll give you reasonable notice — typically by email or by posting a banner on the site.
                </p>
                <p>
                  Your continued use of the Services after changes take effect means you accept the new terms. If you don't, you can stop using the Services and close your account.
                </p>
              </section>

              <section className="policy__section" id="contact">
                <h2>10. Contact us</h2>
                <p>
                  Questions about these Terms? Reach out — we read every message.
                </p>
                <ul>
                  <li><strong>Email:</strong> legal@pagevault.com</li>
                  <li><strong>Mail:</strong> PageVault Legal, 548 Market Street, Suite 321, San Francisco, CA 94104</li>
                </ul>
                <p>
                  You can also use the <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>Contact page</Link> for general questions.
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
            <h2 className="text-h2">Ready to start reading?</h2>
            <p className="text-body" style={{ marginTop: '12px', maxWidth: '460px', margin: '12px auto 0' }}>
              With the legalities out of the way, the only thing left is finding your next favorite book.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link to="/store" className="btn btn--dark btn--lg" id="terms-cta-btn">
                Browse the store
                <HiOutlineArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
