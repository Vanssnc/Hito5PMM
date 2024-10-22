import React from 'react'
import { Link } from 'react-router-dom';


export default function NavbarLink() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    {/* <button class="btn btn-success me-2" type="button">Pizzería Mamma Mia</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Home</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Register</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Login</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Profile</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Cart</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Logout</button> */}
    {/* <button class="btn btn-sm btn-outline-secondary" type="button">Total</button> */}

    <Link to="/" className="btn btn-success me-2">Pizzería Mamma Mia</Link>
          <Link to="/" className="btn btn-sm btn-outline-secondary">Home</Link>
          <Link to="/register" className="btn btn-sm btn-outline-secondary">Register</Link>
          <Link to="/login" className="btn btn-sm btn-outline-secondary">Login</Link>
          <Link to="/profile" className="btn btn-sm btn-outline-secondary">Profile</Link>
          <Link to="/cart" className="btn btn-sm btn-outline-secondary">Total </Link>
          

  </form>
</nav>
    </div>
  )
}
