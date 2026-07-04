import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineInformationCircle, HiOutlineRefresh, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';
import './Policy.css';

const RefundPolicy = () => {
  return (
    <main className="policy" id="refund-page">
      {/* Header */}
      <section className="policy__header">
        <div className="container">
          <div className="policy__header-content">
            <span className="badge badge--accent animate-fade-in-up">Support</span>
            <h1 className="text-hero policy__title animate-fade-in-up animate-delay-1">
              Refund Policy
            </h1>
            <p className="text-body policy__subtitle animate-fade-in-up animate-delay-2">
              We stand behind every book in our library. If something isn't right, we'll make it right — fairly and quickly.
            </p>

            <div className="policy__meta animate-fade-in-up animate-delay-3">
              <div className="policy__meta-item">
                <span className="policy__meta-label">Effective</span>
                <span className="policy__meta-value">January 1, 2026</span>
              </div>
              <div className="policy__meta-item">
                <span className="policy__meta-label">Last updated</span>
                <span className="policy__meta-value">June 15, 2026</span>
              </div>
              <div className="policy__meta-item">
                <span className="policy__meta-label">Refund window</span>
                <span className="policy__meta-value">14 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container">
          <div className="policy__body">
            {/* Table of contents */}
            <aside className="policy__toc">
              <span className="policy__toc-title">On this page</span>
              <a href="#overview">Overview</a>
              <a href="#eligibility">Eligibility</a>
              <a href="#process">How it works</a>
              <a href="#non-refundable">Non-refundable items</a>
              <a href="#timing">Timing</a>
              <a href="#contact">Questions</a>
            </aside>

            {/* Content */}
            <div className="policy__content">
              <section className="policy__section" id="overview">
                <h2>1. Overview</h2>
                <p>
                  At PageVault, we want you to be completely satisfied with your purchase. Because our products are digital books delivered instantly, our refund policy is designed to be fair to both you and our authors. This policy outlines the conditions under which refunds are issued and how the process works.
                </p>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineInformationCircle size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Our promise</strong>
                    <p>If a PDF is defective, mismatched, or fails to download, we'll issue a full refund — no questions asked.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="eligibility">
                <h2>2. Eligibility for refunds</h2>
                <p>You may request a refund within <strong>14 days</strong> of purchase if any of the following apply:</p>
                <ul>
                  <li>The file is corrupted, incomplete, or fails to open on supported devices.</li>
                  <li>The content materially differs from the description on the product page.</li>
                  <li>You were charged more than once for the same order (duplicate charge).</li>
                  <li>The book is removed from our library and you can no longer access it.</li>
                  <li>Your account was used without your authorization.</li>
                </ul>
                <p>
                  For change-of-mind refunds (you simply don't want the book), we'll evaluate the request based on download history and account standing.
                </p>
              </section>

              <section className="policy__section" id="process">
                <h2>3. How refunds work</h2>
                <div className="refund__timeline">
                  <div className="refund__step">
                    <div className="refund__step-num">1</div>
                    <h3>Request</h3>
                    <p>Contact our support team or use the refund link in your order confirmation email.</p>
                  </div>
                  <div className="refund__step">
                    <div className="refund__step-num">2</div>
                    <h3>Review</h3>
                    <p>We review your request within 1 business day. Most are approved automatically.</p>
                  </div>
                  <div className="refund__step">
                    <div className="refund__step-num">3</div>
                    <h3>Refund</h3>
                    <p>Approved refunds are returned to your original payment method within 5–10 business days.</p>
                  </div>
                </div>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineRefresh size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Exchanges</strong>
                    <p>Prefer a different book? We can convert a refund into store credit instantly, with no waiting period.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="non-refundable">
                <h2>4. Non-refundable items</h2>
                <p>Refunds cannot be issued in the following situations:</p>
                <ul>
                  <li>The book has been downloaded in full and the request is filed after 14 days.</li>
                  <li>The book was part of a promotional gift, giveaway, or bonus bundle.</li>
                  <li>The request is for content that has been read, reviewed, or distributed externally.</li>
                  <li>The account has a history of excessive refund requests (we'll reach out before declining).</li>
                </ul>
                <div className="policy__callout">
                  <div className="policy__callout-icon">
                    <HiOutlineExclamationCircle size={20} />
                  </div>
                  <div className="policy__callout-body">
                    <strong>Author protection</strong>
                    <p>Our refund policy also protects the authors and publishers we work with. We reserve the right to refuse refunds in cases of suspected abuse, while always being willing to hear your side.</p>
                  </div>
                </div>
              </section>

              <section className="policy__section" id="timing">
                <h2>5. Timing</h2>
                <p>
                  Once your refund is approved, the time it takes to appear in your account depends on your payment provider:
                </p>
                <ul>
                  <li><strong>Credit / debit card:</strong> 5–10 business days</li>
                  <li><strong>PayPal:</strong> 1–3 business days</li>
                  <li><strong>Store credit:</strong> Instant</li>
                  <li><strong>Bank transfer (where supported):</strong> 3–7 business days</li>
                </ul>
                <p>
                  You will receive an email confirmation as soon as the refund is processed. If you don't see the refund after the stated window, please contact your bank or payment provider before reaching out to us.
                </p>
              </section>

              <section className="policy__section" id="contact">
                <h2>6. Questions or disputes</h2>
                <p>
                  If you have any questions about a refund, or you'd like to appeal a decision, our support team is happy to help. We respond to all refund inquiries within one business day.
                </p>
                <p>
                  For the fastest resolution, please include your order number and a brief description of the issue. You can reach us via the <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>Contact page</Link> or reply directly to your order confirmation email.
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
            <h2 className="text-h2">Need a refund right now?</h2>
            <p className="text-body" style={{ marginTop: '12px', maxWidth: '460px', margin: '12px auto 0' }}>
              Our support team can usually resolve refund requests in under an hour during business hours.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn btn--dark btn--lg" id="refund-cta-btn">
                Contact support
                <HiOutlineArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefundPolicy;
