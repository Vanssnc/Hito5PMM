import React, { useState } from 'react';
import { pizzaCart as initialPizzaCart } from '../../assets/js/pizzas'; 

export default function Cart() {
  const [pizzaCart, setPizzaCart] = useState(initialPizzaCart); 

  //Contadores
  const increaseQuantity = (id) => {
    setPizzaCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setPizzaCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updatedCart.filter((item) => item.count > 0); 
    });
  };

  // Total de la compra
  const total = pizzaCart.reduce((acc, item) => acc + item.price * item.count, 0);

  const handlePayment = () => {
  
    alert("Pago.");
  };

  return (
    <div className="cart">
      <h1>Tu Carrito de Compras</h1>
      <div className="cart-items">
        {pizzaCart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.count}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <h2>Total de la compra: ${total}</h2>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
}
