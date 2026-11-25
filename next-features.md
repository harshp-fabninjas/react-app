# Food Store – Next Features to Learn React

Each feature teaches a new concept. Go from easy to hard.

---

## 🟢 Easy: practice what you know

| # | Feature | You'll learn | Done |
|---|---|---|---|
| 1 | "No food found" message when search has no results | conditional rendering with `.length === 0` | ☐ |
| 2 | "Clear cart" button | resetting state with `setCartItem([])` | ☐ |
| 3 | Veg / Non-Veg / All filter with 3 buttons | state with more than 2 values, active button style | ☐ |
| 4 | Sort by price (low → high) dropdown | `<select>`, `toSorted()`, derived data | ☐ |
| 5 | A small "Added to cart ✓" message that hides after 2s | `setTimeout` + `useEffect` cleanup | ☐ |

---

## 🟡 Medium: new hooks and patterns

| # | Feature | You'll learn | Done |
|---|---|---|---|
| 6 | Keep the cart after a page refresh | `localStorage` + `useEffect` | ☐ |
| 7 | Debounced search (filter only after typing stops) | `useEffect` cleanup, timers | ☐ |
| 8 | Checkout form (name, phone, address) with errors | controlled forms, validation, `onSubmit` | ☐ |
| 9 | Coupon code ("SAVE10" → 10% off) | derived values, `if` logic | ☐ |
| 10 | Load the menu from a JSON file or API | `fetch` + `useEffect` + loading/error states | ☐ |

---

## 🔴 Harder: real-app concepts

| # | Feature | You'll learn | Done |
|---|---|---|---|
| 11 | Move the cart into a **Context** (no more prop drilling) | `createContext`, `useContext` | ☐ |
| 12 | Cart logic with **useReducer** (`ADD`, `REMOVE`, `CLEAR`) | reducers, actions | ☐ |
| 13 | A custom hook `useLocalStorage` or `useCart` | custom hooks, reusing logic | ☐ |
| 14 | Pages: Home / Cart / Order Success | React Router (`react-router`) | ☐ |
| 15 | Dark mode toggle | Context + CSS variables | ☐ |
| 16 | Add TypeScript types to props and the cart | `type`, typed `useState` | ☐ |

---

## Suggested order

**1 → 2 → 6 → 8 → 10 → 11 → 12 → 14**

That path covers the most important React concepts, one at a time.

---

## ✅ Already done

- Navbar with cart icon and count
- Search with a clear (×) button
- Non-veg toggle filter
- Loader with `useEffect` + `setTimeout`
- Menu cards with `.map()` and props
- Cart side panel (slide in/out, closes on outside click)
- Add to cart, with + / − quantity on cards and in the cart
- Cart total and header count with `reduce`
