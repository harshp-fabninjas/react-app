import './css/MenuListing.css'
import MenuItem from './MenuItem'
import menu from '../data/menu.js'
import { useState, useEffect } from 'react';

function MenuListing({selectedType, searchQuery, addToCart, removeFromCart, cartItem, selectedFilter}) {
    const [isLoading, setIsLoading] = useState(true);

    let filteredMenu = selectedType === "all" ? menu : menu.filter((item) => item.type === selectedType);
    filteredMenu = filteredMenu.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    if(selectedFilter === "low-high") {
        filteredMenu = filteredMenu.toSorted((a,b) => a.price - b.price);
    }

    if(selectedFilter === "high-low") {
        filteredMenu = filteredMenu.toSorted((a,b) => b.price - a.price);
    }

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 300);

        return () => clearTimeout(timer);
    }, [selectedType, searchQuery]);

    function getQuantity(name) {
        const cartEntry = cartItem.find((item) => item.name === name);
        return cartEntry ? cartEntry.quantity : 0;
    }

    if(isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <section className="menu-listing">

               { filteredMenu.length === 0 ? (
                    <div className="no-food">
                        <div className="no-food-icon">🍽️</div>
                        <p className="no-food-title">No Food Found !</p>
                        <p className="no-food-text">Try searching for something else.</p>
                    </div>
               ) : filteredMenu.map((item) => (
                    <MenuItem
                        key={item.name}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        type={item.type}
                        image={item.image}
                        quantity={getQuantity(item.name)}
                        addToCartClickEvent={() => addToCart(item)}
                        removeFromCartClickEvent={() => removeFromCart(item)}
                    />
               ))}
            </section>
        </>
    )
}

export default MenuListing
