import React from 'react';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/home">CRUD Operation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/all">All Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add">Add Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
