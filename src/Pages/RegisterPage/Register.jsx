import React from 'react'
import './register.css'
import { useState } from 'react';

export default function Register() {
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[password2, setPassword2] = useState("");

const handleEmailChange = (e) => setEmail(e.target.value);
const handlePasswordChange = (e) => setPassword(e.target.value);
const handlePassword2Change = (e) => setPassword2(e.target.value);

const handleSubmit = (e) =>{
        e.preventDefault();
        if (email==='' | password === ''| password2 ==='') {
            alert("Todos los campos deben ser rellenados")
        }

        else if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
        }

        else if(password !== password2){
            alert("Las contraseñas no coinciden")
        }

        else {
            alert("Enviado")
        }
    };


  return (
    <div className='form'>
    <h2>Register</h2>

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

    <label htmlFor="">
    Confirmar contraseña:
    <br />
        <input onChange={handlePassword2Change}
        type="password" />
    </label>

    <button type='submit'>Login</button>

  
        </form>

        </div>
    </div>
  )
}
