import React, { useEffect } from 'react'
import {
    useLocation,
    Link,
    useNavigate
} from "react-router-dom";

function Navbar() {

    let navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate("/login");
    }

    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
                <Link to="/login" className="btn btn-primary btn-lg active mx-1" role="button" aria-pressed="true">Login</Link>
                <Link to="/signup" className="btn btn-primary btn-lg active mx-1" role="button" aria-pressed="true">Signup</Link>
            </form> : <button className="btn btn-primary btn-lg active mx-1" onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
