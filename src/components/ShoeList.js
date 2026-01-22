import React from "react";

function ShoeList({ shoes, add }) {
  return (
    <div>
      <h2>Shoes</h2>
      {shoes.map((s) => (
        <div key={s.id}>
          <img src={s.img} alt={s.name} />
          <p>{s.name} ₹{s.price}</p>
          <button onClick={() => add(s)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;
