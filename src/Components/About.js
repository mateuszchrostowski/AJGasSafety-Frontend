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
                <h2>We’re a group of creative thinkers who have built a business to change the world.</h2>
            </section>
            <div className='devider'></div>
            <section className='section-flex-column'>
                <div>
                    {/* <h5>ABOUT</h5>
                    <h2>Who we are</h2> */}
                    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h5>                    
                </div>
                <img src={photo}></img>
            </section>
        </div>
        );
      }
};

export default About;