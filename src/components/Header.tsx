import './css/Header.css'

function Header({ toggleCart, cartItemsCount }) {
    return (
        <>
            <nav className="navbar">
                <div className="logo">Food Store</div>

                <button type="button" className="cart" aria-label="Open cart" onClick={toggleCart}>
                    <svg
                        className="cart-icon"
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

                    <span className="cart-count">{cartItemsCount}</span>
                </button>
            </nav>
        </>
    )
}

export default Header
