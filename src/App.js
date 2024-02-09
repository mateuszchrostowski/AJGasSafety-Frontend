import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import ForgotPassword from './Components/ForgotPassword';
import Footer from './Components/Footer';

import { useDispatch, useSelector } from 'react-redux';
// import { logIn, logOut } from './Redux/User/userSlice';
import { useAuth } from './Contexts/AuthContext';
import Works from './Components/Works';

function App() {
  const { currentUser} = useAuth()
  const dispatch = useDispatch();
  const { userType, isLoggedIn } = useSelector((store) => store.user)
  console.log({ isLoggedIn });
  console.log(currentUser)
  
  
  return (
      <Router>
        <div className="App">
          {/* {isLoggedIn
            ? <button onClick={() => dispatch(logOut())}>Wyloguj</button>
            : <button onClick={() => dispatch({ type: "user/logIn", payload: currentUser.email })}>Zaloguj</button>
          }
          <p>User: {userType}</p> */}
          <Navbar />
          <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/works' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Switch>
          <Footer />
        </div>
      </Router>    
  );
}

export default App;
