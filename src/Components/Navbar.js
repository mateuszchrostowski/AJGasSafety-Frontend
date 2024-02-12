import React, { useState } from 'react';
import '../Styles/App.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';




export default function Navbar() {
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState(false);
    const [error, setError] = useState("")

    function ToggleButton() {
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu)
    };
    
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          navigate("/login")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <div>
            <button onClick={() => ToggleButton()} className="material-symbols-outlined">menu</button>
            <nav className={(mobileMenu) ? "" : "hidden"}>
                <ul>                    
                    {currentUser ? <a> Hi, {currentUser.email} </a> : <></>}
                    {error && <p id="error">{error}</p>}
                    <li> {!currentUser ? <NavLink to={"/login"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>Log In</NavLink> : <Link onClick={handleLogout}>Log Out</Link>}</li>
                    <li style={{ marginRight: "auto" }}>{!currentUser ? <NavLink to={"/signup"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>Sign Up</NavLink> : <></>}</li>
                    <li><NavLink to={"/"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>Home</NavLink></li>
                    <li><NavLink to={"/about"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>About</NavLink></li>
                    <li><NavLink to={"/services"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>Services</NavLink></li>
                    <li><NavLink to={"/works"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>Our Works</NavLink></li>
                    <li><NavLink to={"/contact"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => ToggleButton()}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

