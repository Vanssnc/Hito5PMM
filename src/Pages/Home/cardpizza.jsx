import React from 'react'

export default function CardPizza({ name, img, desc, price, ingredients }) {
          return (
            <div className="pizza-card">
              <img src={img} alt={name} className="pizza-img" />
              <h2>{name}</h2>
              <p>{desc}</p>
              <h3>Precio: ${price}</h3>
              <h4>Ingredientes:</h4>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          );
        }