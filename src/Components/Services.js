import React from "react";
import photo from '../Uploads/tE6th1h6Bfk.jpg'
import '../Styles/Services.css';
import Table from './Table';

class Services extends React.Component {

    render() {
        return (
            <div>
                <header className='header-services'>
                    <p>Services</p>
                </header>
                <section className='section-flex-column'>
                    <h5>WHAT WE DO</h5>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
                </section>
                <Table/>
            </div>
        )
    }
}

export default Services;