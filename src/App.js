import React, { useState } from "react";
import shoes from "./data/data";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const add = (shoe) => {
    const item = cart.find(i => i.id === shoe.id);
    item
      ? setCart(cart.map(i => i.id === shoe.id ? { ...i, qty: i.qty + 1 } : i))
      : setCart([...cart, { ...shoe, qty: 1 }]);
  };

  const minus = (id) => {
    const item = cart.find(i => i.id === id);
    item.qty === 1
      ? setCart(cart.filter(i => i.id !== id))
      : setCart(cart.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i));
  };

  return (
    <div>
      <h1>Shoe Store</h1>
      <ShoeList shoes={shoes} add={add} />
      <Cart cart={cart} add={add} minus={minus} />
    </div>
  );
}

export default App;