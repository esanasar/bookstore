import type { Book } from '../types/book'

type BookCardProps = {
  book: Book
  onAddToCart: (bookId: number) => void
}

export function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <article className="book-card">
      <div className="book-image-wrap">
        <img src={book.image} alt={book.title} className="book-image" />
        {book.tag ? <span className="book-tag">{book.tag}</span> : null}
      </div>

      <div className="book-info">
        <div className="book-meta">
          <span>{book.category}</span>
          <span>★ {book.rating}</span>
        </div>

        <h3>{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-description">{book.description}</p>

        <div className="book-actions">
          <strong>${book.price.toFixed(2)}</strong>
          <button type="button" onClick={() => onAddToCart(book.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
