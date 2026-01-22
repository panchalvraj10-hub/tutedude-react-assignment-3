import React, { useState } from "react";

function Cart({ data }) {
  const [qty, setQty] = useState(0);

  return (
    <div>
      <h2>Cart</h2>

      {!data && <p>Cart is empty</p>}

      {data && (
        <div>
          <p>
            {data.name} - ₹{data.price}
          </p>
          <button onClick={() => qty > 0 && setQty(qty - 1)}>-</button>
          <span> {qty} </span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      )}
    </div>
  );
}

export default Cart;