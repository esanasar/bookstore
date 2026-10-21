import type { Book } from '../types/book'
import { BookCard } from './BookCard'

type SuggestedBooksProps = {
  books: Book[]
  onAddToCart: (bookId: number) => void
}

export function SuggestedBooks({ books, onAddToCart }: SuggestedBooksProps) {
  const featuredBooks = books.filter((book) => book.featured)

  return (
    <section className="section-block" id="suggested">
      <div className="section-heading">
        <p className="eyebrow">Suggested today</p>
        <h2>Popular reads chosen for you</h2>
      </div>

      <div className="suggested-grid">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}
