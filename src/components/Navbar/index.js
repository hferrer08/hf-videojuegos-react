import React from "react";
import {Link} from 'react-router-dom'


function Navbar(){
    return (
   
      <div className="container-fluid bg-secondary" >
        <div className="container">
          <nav className="navbar navbar-expand-lg sticky-top bg-secondary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">HF-Videojuegos</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/categoria/switch'>Nintendo switch</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/categoria/ps4'>PS4</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Figuras y juguetes
                    </Link>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Figuras</a></li>
                      <li><a className="dropdown-item" href="#">Juguetes</a></li>

                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

)
}

export default Navbar