import React from 'react';
import '../Styles/App.css';
import {NavLink} from 'react-router-dom';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to={"/"} className={(navData) => (navData.isActive ? "active" : 'none')}>Home</NavLink></li>
                    <li><NavLink to={"/about"} className={(navData) => (navData.isActive ? "active" : 'none')}>About</NavLink></li>
                    <li><NavLink to={"/services"} className={(navData) => (navData.isActive ? "active" : 'none')}>Services</NavLink></li>
                    <li><NavLink to={"/contact"} className={(navData) => (navData.isActive ? "active" : 'none')}>Contact</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;