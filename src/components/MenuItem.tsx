import './css/MenuItem.css'

function MenuItem({name, description, price, type, image, quantity, addToCartClickEvent, removeFromCartClickEvent}) {
    return (
        <>
            <div className="menu-card">
                <div className="food-image">
                    <img src={image} alt={name} />
                </div>

                <span className={`food-type ${type}`}>{type === "veg" ? "veg" : 'non veg'}</span>

                <h3 className="food-name">{name}</h3>

                <p className="food-description">
                    {description}
                </p>

                <div className="card-footer">
                    <span className="food-price">₹{price}</span>
                    {quantity === 0 ? (
                        <button className="add-button" onClick={addToCartClickEvent}>+ Add</button>
                    ) : (
                        <div className="quantity">
                            <button type="button" className="quantity-button" onClick={removeFromCartClickEvent}>−</button>
                            <span className="quantity-value">{quantity}</span>
                            <button type="button" className="quantity-button" onClick={addToCartClickEvent}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MenuItem
