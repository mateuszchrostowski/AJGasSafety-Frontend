import React, { useState } from 'react';
import '../Styles/App.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';




export default function Navbar() {
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState(false);
    const [error, setError] = useState("")

    

    const konsola = () => {
        console.log("włączyłam się")
    }

    async function ToggleButton() {        
        await setMobileMenu(!mobileMenu)        
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
            <button onClick={ToggleButton} className="material-symbols-outlined"
            id='menu-button'>menu</button>
            <nav className={mobileMenu ? "" : "hidden"}>
                <ul>                    
                    {currentUser ?  <li><Link to={"/profile"}
                    onClick={mobileMenu ? ToggleButton : null}
                    >
                    {currentUser.displayName ? currentUser.displayName: currentUser.email}</Link></li> : <></>}
                    {error && <p id="error">{error}</p>}
                    <li> {!currentUser ? <NavLink to={"/login"} className={(navData) => (navData.isActive ? "active" : 'none')} 
                    onClick={mobileMenu ? ToggleButton : null}
                    >Log In</NavLink> : <Link onClick={() => {handleLogout(); ToggleButton()}}>Log Out</Link>}</li>
                    <li style={{ marginRight: "auto" }}>{!currentUser ? <NavLink to={"/signup"} className={(navData) => (navData.isActive ? "active" : 'none')} 
                    onClick={mobileMenu ? ToggleButton : null}
                    >Sign Up</NavLink> : <></>}</li>
                    <li><NavLink to={"/"} className={(navData) => (navData.isActive ? "active" : 'none')} 
                    onClick={mobileMenu ? ToggleButton : null}
                    >Home</NavLink></li>
                    <li><NavLink to={"/about"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={mobileMenu ? ToggleButton : null}>About</NavLink></li>
                    <li><NavLink to={"/services"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={mobileMenu ? ToggleButton : null}>Services</NavLink></li>
                    <li><NavLink to={"/works"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={mobileMenu ? ToggleButton : null}>Our Works</NavLink></li>
                    <li><NavLink to={"/contact"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={mobileMenu ? ToggleButton : null}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

