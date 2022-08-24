import React from 'react'
import { NavLink } from 'react-router-dom'


const NavbarP = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1661292375/PwC-logo_pp0udd.svg" alt="Logo" /></NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active " aria-current="page" to="/">Registrar</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Clientes">Clientes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}
export default NavbarP;