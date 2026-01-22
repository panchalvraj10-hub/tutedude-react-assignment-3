import React from "react";
import shoes from "../data/data";

function ShoeList({ onAdd }) {
  return (
    <div>
      {shoes.map(shoe => (
        <div key={shoe.id}>
          <p>{shoe.name} - ₹{shoe.price}</p>
          <button onClick={() => onAdd(shoe)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;