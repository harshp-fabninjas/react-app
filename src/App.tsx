import Header from './components/Header.tsx'
import Filter from './components/Filter.tsx'
import MenuListing from './components/MenuListing.tsx'
import { useEffect, useState } from 'react';
import Cart from './components/Cart.tsx';
import ToastMessage from './components/ToastMessage.tsx';

function App() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [showToaster, setShowToaster] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  function showToast(type, message) {
    setShowToaster(type);
    setToastMessage(message);
  }

  const addToCart = (food) => {
    const isInCart = cartItem.some((item) => item.name === food.name);

    if(!isInCart) {
      const newItem = [...cartItem, {...food, quantity: 1}];
      setCartItem(newItem);
      showToast("success", `${food.name} added to cart`);
      return;
    }

    const updatedCart = cartItem.map((item) =>
      item.name === food.name ? {...item, quantity: item.quantity + 1} : item
    );

    setCartItem(updatedCart);
    showToast("success", `One more ${food.name} added`);
  };

  function removeFromCart(food) {
    const cartEntry = cartItem.find((item) => item.name === food.name);

    if (cartEntry.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.name !== food.name));
      return;
    }

    const updatedCart = cartItem.map((item) =>
      item.name === food.name ? {...item, quantity: item.quantity - 1} : item
    );

    setCartItem(updatedCart);
  }

  const cartTotal = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cartItem.length;

  const clearCart = () => {
    setCartItem([]);
  };

  useEffect(() => {
    if (showToaster === "") return;

    const timer = setTimeout(() => setShowToaster(""), 2000);
    return () => clearTimeout(timer);
  }, [showToaster]);

  return (
    <>
      <Header toggleCart={() => setIsCartOpen(!isCartOpen)} cartItemsCount={cartItemsCount}></Header>

      <ToastMessage showToaster={showToaster} setShowToaster={setShowToaster} toastMessage={toastMessage}></ToastMessage>

      <Filter selectedType={selectedType} setSelectedType={setSelectedType} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter}></Filter>

      <MenuListing selectedType={selectedType} searchQuery={searchQuery} addToCart={addToCart} removeFromCart={removeFromCart} cartItem={cartItem} selectedFilter={selectedFilter}></MenuListing>

      <Cart isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} cartItem={cartItem} addToCart={addToCart} removeFromCart={removeFromCart} cartTotal={cartTotal} clearCart={clearCart}></Cart>
    </>
  )
}

export default App
