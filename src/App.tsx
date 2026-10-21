import { useMemo, useState } from 'react'
import './App.css'
import { books } from './data/books'
import { BookCard } from './components/BookCard'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SuggestedBooks } from './components/SuggestedBooks'
import type { Book } from './types/book'

type CartItem = {
  book: Book
  quantity: number
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orderPlaced, setOrderPlaced] = useState(false)

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0),
    [cartItems],
  )

  const addToCart = (bookId: number) => {
    setOrderPlaced(false)
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.book.id === bookId)

      if (existing) {
        return currentItems.map((item) =>
          item.book.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      const selectedBook = books.find((book) => book.id === bookId)
      if (!selectedBook) {
        return currentItems
      }

      return [...currentItems, { book: selectedBook, quantity: 1 }]
    })
  }

  const increaseQuantity = (bookId: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.book.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (bookId: number) => {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.book.id !== bookId) {
          return [item]
        }

        if (item.quantity === 1) {
          return []
        }

        return [{ ...item, quantity: item.quantity - 1 }]
      }),
    )
  }

  const removeFromCart = (bookId: number) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.book.id !== bookId))
  }

  const clearCart = () => {
    setCartItems([])
    setOrderPlaced(false)
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return
    }

    setOrderPlaced(true)
    setCartItems([])
  }

  return (
    <div className="storefront-shell">
      <Header itemCount={itemCount} totalPrice={totalPrice} />

      <main className="content-wrap">
        <Hero />
        <SuggestedBooks books={books} onAddToCart={addToCart} />

        <section className="section-block" id="catalog">
          <div className="section-heading">
            <p className="eyebrow">Book catalog</p>
            <h2>Browse our collection</h2>
          </div>

          <div className="catalog-grid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>

      <Cart
        items={cartItems}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={handleCheckout}
        isEmpty={cartItems.length === 0}
        totalPrice={totalPrice}
        orderPlaced={orderPlaced}
      />
    </div>
  )
}

export default App
