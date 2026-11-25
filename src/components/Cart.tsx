import './css/Cart.css'

function Cart({ isOpen, closeCart, cartItem, addToCart, removeFromCart, cartTotal, clearCart }) {
    return (
        <>
            {/* Dark layer behind the cart - click it to close */}
            <div className={`cart-overlay ${isOpen ? "open" : ""}`} onClick={closeCart}></div>

            <aside className={`cart-panel ${isOpen ? "open" : ""}`}>
                {/* Top: title + close button */}
                <div className="cart-panel-header">
                    <h2 className="cart-panel-title">Your Cart</h2>
                    <button type="button" className="cart-close" aria-label="Close cart" onClick={closeCart}>×</button>
                </div>

                {/* Below header: Clear Cart (only when cart has items) */}
                {cartItem.length > 0 && (
                    <div className="cart-actions">
                        <button type="button" className="clear-cart-button" onClick={clearCart}>
                            <svg
                                className="clear-cart-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            Clear Cart
                        </button>
                    </div>
                )}

                {/* Middle: empty message OR list of items */}
                {cartItem.length === 0 ? (
                    <div className="cart-empty">
                        <p className="cart-empty-title">Your cart is empty</p>
                        <p className="cart-empty-text">Add some tasty food to get started!</p>
                    </div>
                ) : (
                    <ul className="cart-list">
                        {cartItem.map((item) => (
                            <li key={item.name} className="cart-item">
                                <img className="cart-item-image" src={item.image} alt={item.name} />

                                <div className="cart-item-info">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <span className="cart-item-price">₹{item.price}</span>
                                </div>

                                {item.quantity === 0 ? (
                                    <button className="add-button" onClick={() => addToCart(item)}>+ Add</button>
                                ) : (
                                    <div className="quantity">
                                        <button type="button" className="quantity-button" onClick={() => removeFromCart(item)}>−</button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button type="button" className="quantity-button" onClick={() => addToCart(item)}>+</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Bottom: total + checkout */}
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">₹{cartTotal}</span>
                    </div>

                    <button type="button" className="checkout-button">Checkout</button>
                </div>
            </aside>
        </>
    )
}

export default Cart
