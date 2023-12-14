import React from 'react';
import '../Styles/App.css';
import { NavLink } from 'react-router-dom';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false     
        };
    };


    ToggleButton() {
        this.setState(
            { mobileMenu: !this.state.mobileMenu }
        );
    }
 



    render() {
        return (            
            <div>
                <button onClick={() => this.ToggleButton()} className="material-symbols-outlined">menu</button>
                <nav className= {(this.state.mobileMenu) ? "" : "hidden"}>
                    <ul>
                        <li><NavLink to={"/"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => this.ToggleButton()}>Home</NavLink></li>
                        <li><NavLink to={"/about"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => this.ToggleButton()}>About</NavLink></li>
                        <li><NavLink to={"/services"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => this.ToggleButton()}>Services</NavLink></li>
                        <li><NavLink to={"/contact"} className={(navData) => (navData.isActive ? "active" : 'none')} onClick={() => this.ToggleButton()}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;