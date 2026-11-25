# React Hooks – Quick Notes

**Rules for all hooks**
- Call hooks only at the **top** of a component, never inside `if`, loops, or after a `return`.
- Call hooks only inside **React components** or **custom hooks**.

---

## ⭐ Most used

| Hook | What it does | Example |
|---|---|---|
| `useState` | Stores a value; changing it **re-renders** the screen. | `const [count, setCount] = useState(0);` |
| `useEffect` | Runs code **after render** (timers, fetch, localStorage). Always runs on first load, then when `[deps]` change. | `useEffect(() => { ... }, [value]);` |
| `useRef` | A box that **remembers a value** without re-rendering. Also grabs HTML elements. | `const inputRef = useRef(null);` |
| `useContext` | Reads shared data from a parent **without prop drilling**. | `const theme = useContext(ThemeContext);` |

---

## ⚡ Performance

| Hook | What it does | Example |
|---|---|---|
| `useMemo` | **Remembers a calculated result**, redoes it only when deps change. | `const total = useMemo(() => sum(items), [items]);` |
| `useCallback` | **Remembers a function**, so it isn't re-created every render. | `const add = useCallback(() => {...}, []);` |
| `useTransition` | Marks an update as **not urgent**, so typing stays smooth. | `const [isPending, startTransition] = useTransition();` |
| `useDeferredValue` | Gives a **delayed copy** of a value (good for slow search lists). | `const slowQuery = useDeferredValue(query);` |

---

## 🧠 Bigger state

| Hook | What it does | Example |
|---|---|---|
| `useReducer` | Like `useState`, but all update logic lives in **one function**. Good for carts. | `const [cart, dispatch] = useReducer(reducer, []);` |

---

## 📝 Forms (React 19)

| Hook | What it does | Example |
|---|---|---|
| `useActionState` | Runs a form action and gives back its **result + pending** state. | `const [state, formAction, isPending] = useActionState(fn, null);` |
| `useFormStatus` | Tells a button inside a `<form>` if the form is **submitting**. | `const { pending } = useFormStatus();` |
| `useOptimistic` | Shows the **expected result instantly**, before the server replies. | `const [optimisticCart, addOptimistic] = useOptimistic(cart, fn);` |

---

## 🔧 Less common

| Hook | What it does | Example |
|---|---|---|
| `use` | Reads a **Promise or Context**. Can be used inside `if`. | `const data = use(promise);` |
| `useId` | Makes a **unique id**, e.g. to link a `<label>` and an `<input>`. | `const id = useId();` |
| `useLayoutEffect` | Like `useEffect`, but runs **before the screen paints** (measuring sizes). | `useLayoutEffect(() => { ... }, []);` |
| `useEffectEvent` | A function inside an effect that always sees the **latest values**, without adding them to deps. | `const onTick = useEffectEvent(() => {...});` |
| `useImperativeHandle` | Chooses what a parent can do with a child's **ref**. | `useImperativeHandle(ref, () => ({ focus }));` |
| `useSyncExternalStore` | Subscribes to data **outside React** (like browser online status). | `useSyncExternalStore(subscribe, getSnapshot);` |
| `useDebugValue` | Shows a label for a custom hook in **React DevTools**. | `useDebugValue(isOnline ? "Online" : "Offline");` |
| `useInsertionEffect` | For **CSS-in-JS libraries** only. You'll almost never use it. | — |

---

## 🛠 Custom hooks
- Your own function whose name starts with `use` and that calls other hooks inside it.
- Use one to **reuse logic** across components, e.g. `useLoader()` or `useCart()`.

---

## Simple rule to pick one
- The value **shows on screen** → `useState`
- The value is only for **logic**, or you need an **HTML element** → `useRef`
- You need **something to happen after render** → `useEffect`
- You're **passing props through many levels** → `useContext`
