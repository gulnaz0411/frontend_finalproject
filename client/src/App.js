import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';
import {useState} from 'react';
import {Home} from './Home'
import {Reporttheft} from './Reporttheft'
import {Login}  from './Login';
import {User} from './Components/User';
import {RegistrationPage,} from './RegistrationPage';
import { BrowserRouter as Router,Routes ,Route ,Link } from 'react-router-dom';




function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSetToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };  
  return (
    <>
    <Router>
    <NaviBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/reporttheft" element={<Reporttheft/>}/>
      <Route path="/login/*" element={<Login setToken={handleSetToken}/>}/>
      <Route path='/registrationpage' element={<RegistrationPage/>}/>
    
      <Route patch="/user"  element={token ? <User token={token} setToken={handleSetToken}/> : <Login setToken={handleSetToken}/>}/>
      
      

    </Routes>
    </Router>
    <Footer/>
    </>

  );
}

export default App;