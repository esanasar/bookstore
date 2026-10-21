import type { Book } from '../types/book'

type CartItem = {
  book: Book
  quantity: number
}

type CartProps = {
  items: CartItem[]
  onIncrease: (bookId: number) => void
  onDecrease: (bookId: number) => void
  onRemove: (bookId: number) => void
  onClear: () => void
  onCheckout: () => void
  isEmpty: boolean
  totalPrice: number
  orderPlaced: boolean
}

export function Cart({
  items,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onCheckout,
  isEmpty,
  totalPrice,
  orderPlaced,
}: CartProps) {
  return (
    <aside className="cart-panel" id="cart">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Your cart</p>
          <h2>Order summary</h2>
        </div>

        {!isEmpty ? (
          <button type="button" className="link-button" onClick={onClear}>
            Clear all
          </button>
        ) : null}
      </div>

      {isEmpty ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <span>Add a few books to continue.</span>
        </div>
      ) : (
        <div className="cart-items">
          {items.map(({ book, quantity }) => (
            <div key={book.id} className="cart-item">
              <div className="cart-item-image">
                <img src={book.image} alt={book.title} />
              </div>

              <div className="cart-item-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <div className="qty-controls">
                  <button type="button" onClick={() => onDecrease(book.id)}>
                    −
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => onIncrease(book.id)}>
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-meta">
                <strong>${(book.price * quantity).toFixed(2)}</strong>
                <button type="button" className="remove-btn" onClick={() => onRemove(book.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary-box">
        <div>
          <span>Subtotal</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <div>
          <span>Shipping</span>
          <strong>{totalPrice > 0 ? '$8.00' : '$0.00'}</strong>
        </div>
        <div className="total-row">
          <span>Total</span>
          <strong>${(totalPrice + (totalPrice > 0 ? 8 : 0)).toFixed(2)}</strong>
        </div>
      </div>

      <button
        type="button"
        className="checkout-button"
        onClick={onCheckout}
        disabled={isEmpty}
      >
        {orderPlaced ? 'Order placed' : 'Proceed to checkout'}
      </button>
    </aside>
  )
}
