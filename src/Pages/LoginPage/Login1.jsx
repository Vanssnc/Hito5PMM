import React from 'react'
import './Login.css'
import { useState } from 'react';


export default function Login1() {
    
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");


const handleEmailChange = (e) => setEmail(e.target.value);
const handlePasswordChange = (e) => setPassword(e.target.value);


const handleSubmit = (e) =>{
    e.preventDefault();
    if (email==='' | password === '') {
        alert("Todos los campos deben ser rellenados")
    }

    else if(password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    }


    else {
        alert("Enviado")
    }
};

    return (
        <div className='form'>
        <h2>Login</h2>
    
        <div className='formularios'>
    
         <form onSubmit={handleSubmit}>
    
         <label htmlFor="">
         Email:
         <br />
            <input onChange={handleEmailChange}
            type="email" />
        </label>
        
    
        <label htmlFor="">
        Contraseña:
        <br />
            <input onChange={handlePasswordChange}
            type="password" />
        </label>
    
        
       <button type='submit'>Login</button>

            </form>
    
            </div>
        </div>
      )
    }
    