type HeaderProps = {
  itemCount: number
  totalPrice: number
}

export function Header({ itemCount, totalPrice }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="brand-block">
        <div className="brand-mark">B</div>
        <div>
          <p className="brand-name">BookNook</p>
          <span className="brand-subtitle">Curated Reads</span>
        </div>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#suggested">Featured</a>
        <a href="#catalog">Books</a>
        <a href="#cart">Cart</a>
      </nav>

      <div className="cart-summary" aria-label="Shopping cart summary">
        <span>{itemCount} items</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
    </header>
  )
}
