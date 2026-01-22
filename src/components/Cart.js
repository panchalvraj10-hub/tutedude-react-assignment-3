import React from "react";

function Cart({ cart, add, minus }) {
  let total = 0;
  cart.forEach(i => total += i.price * i.qty);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((i) => (
        <div key={i.id}>
          <img src={i.img} alt={i.name} />
          <p>{i.name}</p>
          <button onClick={() => minus(i.id)}>-</button>
          {i.qty}
          <button onClick={() => add(i)}>+</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
