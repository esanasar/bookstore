export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Discover your next favorite read</p>
        <h1>Books that inspire, teach, and transform.</h1>
        <p className="hero-description">
          Explore hand-picked stories and practical reads designed to spark growth, imagination,
          and curiosity for every kind of reader.
        </p>

        <div className="hero-actions">
          <a href="#catalog" className="primary-button">
            Shop now
          </a>
          <a href="#suggested" className="secondary-button">
            Featured picks
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Bookstore highlights">
        <div className="floating-card card-top">
          <span>Best seller</span>
          <strong>Atomic Habits</strong>
        </div>

        <div className="hero-book-stack">
          <div className="book-cover cover-one" />
          <div className="book-cover cover-two" />
          <div className="book-cover cover-three" />
        </div>

        <div className="floating-card card-bottom">
          <span>Readers rating</span>
          <strong>4.9/5</strong>
        </div>
      </div>
    </section>
  )
}
