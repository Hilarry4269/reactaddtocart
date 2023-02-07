import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);

  function addToCart() {
    if (!input) {
      alert("Please enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      name: input,
      checked: false,
      quantity: 0,
    };
    setCart((oldCart) => [...oldCart, item]);
    setInput("");
  }

  function updateCheck(id) {
    const itemIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = [...cart];
    updatedCart[itemIndex].checked = !updatedCart[itemIndex].checked;
    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    const itemIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity += 1;
    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const itemIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = [...cart];
    if (updatedCart[itemIndex].quantity > 1) {
      updatedCart[itemIndex].quantity -= 1;
      setCart(updatedCart);
    } else {
      alert("Quantity cannot be less than 1");
    }
  }

  function sumCheckedQuantities() {
    return cart.reduce((total, item) => {
      if (!item.checked) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  }

  return (
    <div className="App">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter item"
      />
      <button onClick={addToCart}>Add to Cart</button>
      <hr />
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            style={item.checked ? { textDecoration: "line-through" } : {}}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => updateCheck(item.id)}
            />
            {item.name}
            <span>
              <button onClick={() => increaseQuantity(item.id)}>&lt;</button>
            

            {item.quantity}
            
              <button onClick={() => decreaseQuantity(item.id)}>&gt;</button>
            </span>
          </li>
        ))}
      </ul>
      <hr />
      Total: {sumCheckedQuantities()}
    </div>
  );
}

export default App;
