import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { categories } from '../data/books';
import './Categories.css';

const Categories = () => {
  return (
    <main className="categories-page" id="categories-page">
      {/* Header */}
      <section className="categories-page__header">
        <div className="container">
          <h1 className="text-h1 animate-fade-in-up">Categories</h1>
          <p className="text-body animate-fade-in-up animate-delay-1" style={{ marginTop: '8px', maxWidth: '520px' }}>
            Browse our extensive collection organized by genre. Find exactly what you're looking for.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-page__content section">
        <div className="container">
          <div className="categories-page__grid">
            {categories.map((cat, index) => (
              <Link
                to="/store"
                key={cat.id}
                className="cat-card"
                id={`cat-card-${cat.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cat-card__image-wrap">
                  <img src={cat.image} alt={cat.name} className="cat-card__image" loading="lazy" />
                  <div className="cat-card__image-overlay"></div>
                </div>
                <div className="cat-card__content">
                  <div>
                    <span className="cat-card__count">{cat.bookCount} books</span>
                    <h2 className="cat-card__title">{cat.name}</h2>
                    <p className="cat-card__desc">{cat.description}</p>
                  </div>
                  <div className="cat-card__arrow">
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="categories-page__banner section">
        <div className="container">
          <div className="categories-page__banner-inner">
            <div className="categories-page__banner-content">
              <span className="badge badge--accent">Can't find what you need?</span>
              <h2 className="text-h2" style={{ marginTop: '16px' }}>Request a book</h2>
              <p className="text-body" style={{ marginTop: '8px', maxWidth: '400px' }}>
                Don't see the book you're looking for? Let us know and we'll add it to our collection.
              </p>
              <button className="btn btn--dark" style={{ marginTop: '24px' }} id="request-book-btn">
                Request a Book
                <HiOutlineArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
