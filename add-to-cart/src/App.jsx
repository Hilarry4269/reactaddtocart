
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
 
    <div className="container">
            
          <div className="App">
         
              <input
                type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Enter items"
              />
              <br />
              
              <button onClick={addToCart}>Add to basket <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEu1le0xBEEQhp+LABEgAi4CREAGiAAZnAgQATJwESADIuAiOCKg3qttNTPb83Fnr/9M1e5MP2/3dPeMWLON1uyfFsAh8JIRUvq3OFIDXAI3wCNwlkAegFPgCrjNZaIE2AQ+AK1HThRS/wx8Abvd2uOUAFJ1AbwCcuaZUncA3AGKthmw06nXAan7zACq+3IRVJUFQItUZ5TKyDyA5fYbkELluGS6I0W44d1VCHgD9gbqC/kap2UqFdsDAWZd9FEfWF0PwfjrmzBFaqT7IbwD54AERxHosuaFUv7JFEj6Xdu2rDjSKvIu2va0At6BfROTAqymQ7HLAqKuTgHWA/8BRHPLa7TWVNQiW4j0AE/A8YrVNAVOvPDDb/YGrMLovQ1eBOGEXBbSm7y5aTrp5rsGWKtdAzpXnaatDpv21d7kJielTb9Yvj8ZhmGqxAAAAABJRU5ErkJggg=="/></button>
              <br />
              <ul class="list-group">
                {cart.map((item) => (
                  <li
                  class="list-group-item d-flex justify-content-between align-items-center"
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
                    <button onClick={() => decreaseQuantity(item.id)}>&lt;</button>

                    {item.quantity}
                    <button onClick={() => increaseQuantity(item.id)}>&gt;</button>
                      
                    </span>
                  </li>
                ))}
              </ul>
              <br/>
              <h1>
                  Total: {sumCheckedQuantities()}
              </h1>
          </div>
    </div>
  );
}

export default App;