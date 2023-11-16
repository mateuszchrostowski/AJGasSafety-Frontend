import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import '../Styles/Contact.css';
import '../Styles/Map.css';
import '../Styles/App.css';


function Contact() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    return (
        <div>
            <header className='header-contact'>
                <p>Contact</p>
            </header>
            <section className='section-flex-column'>                
                <h2>Visit us in England</h2>
            </section>
            <div className='devider'></div>
            <section>
                <h2>Details</h2>
                <div class="grid-details">                    
                    <h4>Phone:</h4>
                    <h4><a className="phone" href="tel:+44123456789">+44 123 456 789</a></h4>
                    <h4>Adress:</h4>
                    <h4>10 Downing StLondon SW1A 2AB, Wielka Brytania</h4>
                </div>
            </section>
            <section className='section-flex-column map'>
                {!isLoaded ? (<div>Loading...</div>) : (<Map />)}
            </section>
        </div>)
}


function Map() {
    const center = useMemo(() => ({ lat: 52.09259, lng: -1.947 }), []);

    return (
        <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
    );
}

export default Contact;