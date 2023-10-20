import React from 'react';
import '../Styles/Home.css';
import '../Styles/App.css';
import photo from '../Uploads/3coKbdfnAFg.jpg'
import { NavLink } from 'react-router-dom';




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        
        };
    };



    render() {
        return (
            <div>
                <header className='header-home'>
                    <p>AJ Gas Safety</p>
                </header>
                <section className='section-flex-column'>
                    <h5>WHAT WE BELIEVE IN</h5>
                    <h2>Grow your business, establish your brand, and put your customers first.</h2>
                </section>
                <section className='section-grid'>
                    <div>
                        <h5>ABOUT</h5>
                        <h2>Who we are</h2>
                        <h5>Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</h5>
                        <NavLink to={"/about"}><button>See More</button></NavLink>
                    </div>
                    <img src={photo}></img>
                </section>
            </div>
        );
    }
};

export default Home;