import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
