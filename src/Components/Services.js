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
                    <h2>All of our heating system installations include a manufacturer’s guarantee, completed commissioning documents and gas certification.</h2>
                </section>
                <Table/>
            </div>
        )
    }
}

export default Services;