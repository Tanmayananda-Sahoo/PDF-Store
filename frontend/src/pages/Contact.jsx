import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineChat, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const channels = [
    {
      icon: <HiOutlineMail size={24} />,
      title: 'Email us',
      desc: 'For general questions, partnerships, and support.',
      action: 'support@pagevault.com',
    },
    {
      icon: <HiOutlineChat size={24} />,
      title: 'Live chat',
      desc: 'Chat with our team in real time during business hours.',
      action: 'Start a conversation',
    },
    {
      icon: <HiOutlinePhone size={24} />,
      title: 'Call us',
      desc: 'Speak directly with our support specialists.',
      action: '+1 (555) 234-7890',
    },
  ];

  const offices = [
    { city: 'San Francisco', address: '548 Market Street, Suite 321', role: 'Headquarters' },
    { city: 'New York', address: '228 Park Avenue South, Floor 8', role: 'Editorial' },
    { city: 'London', address: '14 Bonhill Street, EC2A 4BX', role: 'Operations' },
  ];

  return (
    <main className="contact" id="contact-page">
      {/* Header */}
      <section className="contact__header">
        <div className="container">
          <div className="contact__header-content">
            <span className="badge badge--accent animate-fade-in-up">Contact</span>
            <h1 className="text-hero contact__title animate-fade-in-up animate-delay-1">
              We'd love to<br />hear from you.
            </h1>
            <p className="text-body contact__subtitle animate-fade-in-up animate-delay-2">
              Questions about a book, your account, or just want to say hello? Our team is here to help — usually within a few hours.
            </p>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="contact__channels section">
        <div className="container">
          <div className="contact__channels-grid">
            {channels.map((c, i) => (
              <div key={i} className="contact__channel-card" id={`contact-channel-${i}`}>
                <div className="contact__channel-icon">{c.icon}</div>
                <h3 className="contact__channel-title">{c.title}</h3>
                <p className="text-small contact__channel-desc">{c.desc}</p>
                <span className="contact__channel-action">{c.action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact__form-section section section--gray">
        <div className="container">
          <div className="contact__form-grid">
            <div className="contact__form-wrap">
              <span className="badge badge--accent">Send a message</span>
              <h2 className="text-h2 contact__form-title">Drop us a line</h2>
              <p className="text-body contact__form-sub">
                Fill out the form and we'll get back to you within one business day.
              </p>

              {submitted && (
                <div className="contact__success" id="contact-success">
                  Thanks — your message is on its way. We'll be in touch soon.
                </div>
              )}

              <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="contact__input"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="contact__input"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject" className="contact__label">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="contact__input contact__select"
                    required
                  >
                    <option value="">Choose a topic</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing & refunds</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="contact__input contact__textarea"
                    required
                  />
                </div>

                <button type="submit" className="btn btn--dark btn--lg contact__submit" id="contact-submit">
                  Send message
                  <HiOutlineArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="contact__sidebar">
              <div className="contact__info-card">
                <div className="contact__info-head">
                  <HiOutlineClock size={22} />
                  <h3 className="contact__info-title">Support hours</h3>
                </div>
                <ul className="contact__hours">
                  <li><span>Monday – Friday</span><span>9 AM – 7 PM</span></li>
                  <li><span>Saturday</span><span>10 AM – 4 PM</span></li>
                  <li><span>Sunday</span><span>Closed</span></li>
                </ul>
                <p className="text-small contact__info-note">All times in Pacific Time (PT).</p>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-head">
                  <HiOutlineLocationMarker size={22} />
                  <h3 className="contact__info-title">Our offices</h3>
                </div>
                <ul className="contact__offices">
                  {offices.map((o, i) => (
                    <li key={i} className="contact__office">
                      <div className="contact__office-row">
                        <span className="contact__office-city">{o.city}</span>
                        <span className="contact__office-role">{o.role}</span>
                      </div>
                      <span className="contact__office-addr">{o.address}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact__cta section">
        <div className="container">
          <div className="contact__cta-inner text-center">
            <h2 className="text-h2">Prefer to browse first?</h2>
            <p className="text-body" style={{ marginTop: '12px', maxWidth: '460px', margin: '12px auto 0' }}>
              Explore our library of 50,000+ titles — there might be your next favorite read waiting.
            </p>
            <div style={{ marginTop: '32px' }}>
              <a href="/store" className="btn btn--dark btn--lg" id="contact-cta-btn">
                Browse the store
                <HiOutlineArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
