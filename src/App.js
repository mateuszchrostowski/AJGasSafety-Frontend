import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import ResetPassword from './Components/ForgotPassword';
import Footer from './Components/Footer';
import Works from './Components/Works';
import Unauthorized from './Components/Unauthorized';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Profile from './Components/Profile';



function App() {   
  return (
      <Router>
        <div className="App">
          
          <Navbar />
          <Routes>            
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/works' element={<Works />} />
              <Route path='/contact' element={<Contact />} />

            <Route element={<Unauthorized />}> 
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<LogIn />} />
              <Route path="/forgot-password" element={<ResetPassword />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path='/profile' element={<Profile />}/>
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>    
  );
}

export default App;
