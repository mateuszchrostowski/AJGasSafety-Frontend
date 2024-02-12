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
                    <p>AJ Safety Gas Engineer</p>
                </header>
                <section className='section-flex-column'>
                    <h5>WHAT WE BELIEVE IN</h5>
                    <h2>The perfect warmth for your home, the perfect balance between affordability and comfort, only with gas heating</h2>
                </section>
                <section className='section-grid'>
                    <div>
                        <h5>ABOUT</h5>
                        <h2>Who we are</h2>
                        <h5>AJ Safety Gas Engineer is a well-established and reputable domestic and commercial heating company based in Evesham, England. Having over 5 years of experience in the heating industry, AJ Safety Gas Engineer Company is dedicated to providing a professional and reliable service both locally and nationwide, catering to all domestic and commercial needs including residential, leisure, and retail sectors.</h5>
                        <NavLink to={"/about"}><button>See More</button></NavLink>
                    </div>
                    <img src={photo}></img>
                </section>
            </div>
        );
    }
};

export default Home;