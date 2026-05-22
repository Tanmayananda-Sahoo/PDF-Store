import { useState, useMemo } from 'react';
import { HiOutlineSearch, HiOutlineAdjustments, HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi';
import BookCard from '../components/BookCard';
import { featuredBooks, categories } from '../data/books';
import './Store.css';

const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');

  const filteredBooks = useMemo(() => {
    let books = [...featuredBooks];

    // Filter by category
    if (selectedCategory !== 'all') {
      books = books.filter((book) => book.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      books = books.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        books.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        books.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        books.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        books.sort((a, b) => b.reviews - a.reviews);
    }

    return books;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <main className="store" id="store-page">
      {/* Header */}
      <section className="store__header">
        <div className="container">
          <h1 className="text-h1 animate-fade-in-up">Store</h1>
          <p className="text-body animate-fade-in-up animate-delay-1" style={{ marginTop: '8px' }}>
            Discover your next great read from our curated collection
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="store__toolbar">
        <div className="container">
          <div className="store__toolbar-inner">
            {/* Search */}
            <div className="store__search" id="store-search">
              <HiOutlineSearch size={18} className="store__search-icon" />
              <input
                type="text"
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="store__search-input"
                id="search-input"
              />
            </div>

            {/* Filters */}
            <div className="store__filters">
              <div className="store__filter-group">
                <HiOutlineAdjustments size={16} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="store__select"
                  id="category-filter"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="store__select"
                id="sort-filter"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              <div className="store__view-toggle">
                <button
                  className={`store__view-btn ${viewMode === 'grid' ? 'store__view-btn--active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  id="grid-view-btn"
                  aria-label="Grid view"
                >
                  <HiOutlineViewGrid size={18} />
                </button>
                <button
                  className={`store__view-btn ${viewMode === 'list' ? 'store__view-btn--active' : ''}`}
                  onClick={() => setViewMode('list')}
                  id="list-view-btn"
                  aria-label="List view"
                >
                  <HiOutlineViewList size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="store__pills">
        <div className="container">
          <div className="store__pills-inner">
            <button
              className={`store__pill ${selectedCategory === 'all' ? 'store__pill--active' : ''}`}
              onClick={() => setSelectedCategory('all')}
              id="pill-all"
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`store__pill ${selectedCategory === cat.id ? 'store__pill--active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                id={`pill-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="store__results section">
        <div className="container">
          <p className="store__count text-small" id="results-count">
            {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
          </p>
          {filteredBooks.length > 0 ? (
            <div className={`store__grid ${viewMode === 'list' ? 'store__grid--list' : ''}`} id="books-grid">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="store__empty" id="empty-state">
              <div className="store__empty-icon">📚</div>
              <h3>No books found</h3>
              <p className="text-body">Try adjusting your filters or search terms</p>
              <button
                className="btn btn--secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                id="clear-filters-btn"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Store;
