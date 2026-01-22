import React, { useState } from "react";
import Cart from "./components/Cart";
import ShoeList from "./components/ShoeList";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <ShoeList onAdd={setSelectedItem} />
      <Cart data={selectedItem} />
    </div>
  );
}

export default App;