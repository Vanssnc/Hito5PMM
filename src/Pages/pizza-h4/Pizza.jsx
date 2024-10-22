import React, { useState, useEffect } from 'react';
import CardPizza from '../Home/cardpizza';


export default function Pizza() {
const [pizza, setPizza] = useState(null); 
// Null porque es un objeto
const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      const fetchPizza = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/pizzas/p001');
          const data = await response.json();
          setPizza(data);
        } catch (error) {
          console.error('Error al cargar:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPizza(); 
    }, []);  
  
    if (loading) {
      return <div>Cargando pizzas...</div>;
    }


  return (
    
        <div className="pizza-list">
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            img={pizza.img}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
      </div>
  )
}