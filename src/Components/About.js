import React from 'react';
import '../Styles/About.css';
import '../Styles/App.css';
import photo from '../Uploads/iwz5tmhjl7o.jpg'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      };

      render(){
        return(
        <div>
            <header className='header-about'>
                <p>About</p>
            </header>
            <section className='section-flex-column'>
                {/* <h5>WHAT WE BELIEVE IN</h5> */}
                <h2>We’re a group of creative engineers who have built a business to make your world safe.</h2>
            </section>
            <div className='devider'></div>
            <section className='section-flex-column'>
                <div>
                    {/* <h5>ABOUT</h5>
                    <h2>Who we are</h2> */}
                    <h5>With a wealth of experience in all areas of heating services, we are always able to offer honest, impartial advice and pride ourselves on excellent customer service and quality workmanship. At AJ Safety Gas, no job is too big or too small so whether you need a new boiler installed, a brand-new heating system, or a quick repair, we're on hand to help.We are fully insured and qualified, being Gas Safe certified, providing you with complete peace of mind at all times.Over the years we have developed a reputation through the quality of our workmanship and professional approach, as well as maintaining strong relationships with existing clients. We provide an excellent after-sales services that includes a warranty on all materials supplied.</h5>

                    <h5>All of our heating system installations include a manufacturer’s guarantee, completed commissioning documents and gas certification.</h5>

                    <h5>To give you extra peace of mind that your central heating and boiler systems are still working effectively as they should, without omitting any dangerous gases, we recommend having a gas safety check. We'll perform a check of your gas meter, pipework, as well as any associated appliances and provide a Gas Safety Certificate upon completion.</h5>      

                    <h5>If you are a landlord and manage a rental property, you must ensure that all your gas appliances are up to date and meet the relevant safety standards. Our Gas Safe registered engineers can inspect a property and perform the relevant checks and provide a Landlord’s Gas Safety Certificate.</h5>         
                </div>
                <img src={photo}></img>
            </section>
        </div>
        );
      }
};

export default About;