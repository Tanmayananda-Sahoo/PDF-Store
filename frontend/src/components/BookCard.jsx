import { HiOutlineStar, HiStar, HiOutlineShoppingBag, HiOutlineHeart } from 'react-icons/hi';
import './BookCard.css';

const BookCard = ({ book }) => {
  const discount = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? (
          <HiStar key={i} size={14} className="star star--filled" />
        ) : (
          <HiOutlineStar key={i} size={14} className="star" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="book-card" id={`book-card-${book.id}`}>
      {/* Book Cover */}
      <div className="book-card__cover">
        <div className="book-card__spine"></div>
        <div className="book-card__front">
          <div className="book-card__cover-content">
            <span className="book-card__format">{book.format}</span>
            <h4 className="book-card__cover-title">{book.title}</h4>
            <p className="book-card__cover-author">{book.author}</p>
            <span className="book-card__pages">{book.pages} pages</span>
          </div>
        </div>
        {book.badge && (
          <span className={`badge ${book.badge === 'Bestseller' ? 'badge--accent' : book.badge === 'New Release' ? 'badge--dark' : 'badge--success'} book-card__badge`}>
            {book.badge}
          </span>
        )}
        <div className="book-card__overlay">
          <button className="book-card__action" aria-label="Add to wishlist">
            <HiOutlineHeart size={18} />
          </button>
          <button className="book-card__action book-card__action--primary" aria-label="Add to cart">
            <HiOutlineShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Book Info */}
      <div className="book-card__info">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <div className="book-card__rating">
          <div className="book-card__stars">{renderStars(book.rating)}</div>
          <span className="book-card__rating-text">{book.rating}</span>
          <span className="book-card__reviews">({book.reviews.toLocaleString()})</span>
        </div>
        <div className="book-card__pricing">
          <span className="book-card__price">${book.price}</span>
          <span className="book-card__original-price">${book.originalPrice}</span>
          <span className="book-card__discount">-{discount}%</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
