import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineBookOpen, HiOutlineDownload } from 'react-icons/hi';
import BookCard from '../components/BookCard';
import { featuredBooks, categories, testimonials, stats } from '../data/books';
import heroImg from '../assets/hero.png';
import './Home.css';

const Home = () => {
  return (
    <main className="home" id="home-page">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero-section">
        <div className="hero__bg-gradient"></div>
        <div className="container hero__container">
          <div className="hero__content">
            <div className="animate-fade-in-up">
              <span className="badge badge--accent hero__badge">
                <HiOutlineLightningBolt size={12} />
                Over 50,000 Digital Books
              </span>
            </div>
            <h1 className="text-hero animate-fade-in-up animate-delay-1">
              Your Digital
              Library,<br />
              Reimagined.
            </h1>
            <p className="hero__subtitle text-body animate-fade-in-up animate-delay-2">
              Premium PDF books delivered instantly. Curated collections across every genre, formatted beautifully for any device.
            </p>
            <div className="hero__actions animate-fade-in-up animate-delay-3">
              <Link to="/store" className="btn btn--dark btn--lg" id="hero-explore-btn">
                Explore Store
                <HiOutlineArrowRight size={18} />
              </Link>
              <Link to="/categories" className="btn btn--ghost btn--lg" id="hero-browse-btn">
                Browse Categories
              </Link>
            </div>
            <div className="hero__stats animate-fade-in-up animate-delay-4">
              {stats.map((stat, index) => (
                <div key={index} className="hero__stat">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__image animate-fade-in animate-delay-2">
            <img src={heroImg} alt="Modern reading workspace" className="hero__img" />
            <div className="hero__image-badge">
              <span className="hero__image-badge-value">4.9★</span>
              <span className="hero__image-badge-label">Trusted by 2M+ readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features section" id="features-section">
        <div className="container">
          <div className="features__header text-center">
            <span className="badge badge--accent">Why PageVault</span>
            <h2 className="text-h2" style={{ marginTop: '16px' }}>Everything you need in a digital bookstore</h2>
          </div>
          <div className="features__grid">
            {[
              {
                icon: <HiOutlineDownload size={24} />,
                title: 'Instant Delivery',
                desc: 'Download your books immediately after purchase. No waiting, no shipping.',
              },
              {
                icon: <HiOutlineBookOpen size={24} />,
                title: 'Premium Quality',
                desc: 'Crystal-clear formatting optimized for all devices. Every page looks perfect.',
              },
              {
                icon: <HiOutlineShieldCheck size={24} />,
                title: 'Secure & Private',
                desc: 'Bank-level encryption protects your data. Your reading habits stay private.',
              },
              {
                icon: <HiOutlineLightningBolt size={24} />,
                title: 'Best Prices',
                desc: 'Up to 60% off retail. No printing costs means bigger savings for you.',
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card" id={`feature-${index}`}>
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc text-small">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="categories-section section section--gray" id="categories-preview">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="badge badge--accent">Categories</span>
              <h2 className="text-h2" style={{ marginTop: '16px' }}>Explore by genre</h2>
            </div>
            <Link to="/categories" className="btn btn--secondary" id="view-all-categories">
              View All
              <HiOutlineArrowRight size={16} />
            </Link>
          </div>
          <div className="categories-grid">
            {categories.slice(0, 6).map((cat) => (
              <Link to="/categories" key={cat.id} className="category-card" id={`category-${cat.id}`}>
                <div className="category-card__image-wrap">
                  <img src={cat.image} alt={cat.name} className="category-card__image" loading="lazy" />
                </div>
                <div className="category-card__info">
                  <h3 className="category-card__name">{cat.name}</h3>
                  <p className="category-card__count text-small">{cat.bookCount} books</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED BOOKS ===== */}
      <section className="featured section" id="featured-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="badge badge--accent">Featured</span>
              <h2 className="text-h2" style={{ marginTop: '16px' }}>Handpicked for you</h2>
            </div>
            <Link to="/store" className="btn btn--secondary" id="view-all-books">
              View All
              <HiOutlineArrowRight size={16} />
            </Link>
          </div>
          <div className="featured__grid">
            {featuredBooks.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials section section--gray" id="testimonials-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="badge badge--accent">Testimonials</span>
            <h2 className="text-h2" style={{ marginTop: '16px' }}>Loved by readers worldwide</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card" id={`testimonial-${t.id}`}>
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="testimonial-star">★</span>
                  ))}
                </div>
                <p className="testimonial-card__content">"{t.content}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role text-small">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta section" id="cta-section">
        <div className="container">
          <div className="cta__inner">
            <div className="cta__content text-center">
              <h2 className="text-h1 cta__title">Start reading today</h2>
              <p className="text-body cta__subtitle" style={{ maxWidth: '500px', margin: '0 auto' }}>
                Join over 2 million readers who trust PageVault for their digital book needs. Your next favorite read is just a click away.
              </p>
              <div className="cta__actions">
                <Link to="/store" className="btn btn--dark btn--lg" id="cta-explore-btn">
                  Explore the Store
                  <HiOutlineArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
