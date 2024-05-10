
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage'
import CoxBazar from './pages/Cox\'sBazar';
import Miami from './pages/Miami';
import NewYork from './pages/NewYork';
import Bahamas from './pages/Bahamas';
import MoreD from './component/MoreD';
import SignUpForm from './component/SignUpForm';
import Registration from './component/Registration';
import MiamiBoat from './pages/miamiBoat';
import MoreDD from './component/moreDD';
import BoatList2 from './component/boatList2';
import MiamiBoat2 from './pages/miamiBoat2';
import Profile from './pages/profile';
import BoatRentalForm2 from './component/BoatRentalForm2';
import AdProfile from './pages/Reqcontrol';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInStatus = window.localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!storedLoggedInStatus); // Convert to boolean
  }, []);

  // Watch for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const storedLoggedInStatus = window.localStorage.getItem("isLoggedIn");
      setIsLoggedIn(!!storedLoggedInStatus); // Convert to boolean
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  

  
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}    />
      
      <Route path="/reg" element={<RegPage/>} /> 
      <Route path="/cox" element={<CoxBazar/>} /> 
      <Route path="/new-yok" element={<NewYork/>} />
      <Route path="/bahamas" element={<Bahamas/>} />
      <Route path="/miami" element={<Miami/>} />
      <Route path="/addmore" element={<MiamiBoat2/>} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/admin" element={ <AdProfile/>} />
      
      <Route path="/profile/:userId" element={isLoggedIn ? <Profile /> : <LoginPage />} />
      
      <Route path="/n" element={<MiamiBoat/>}/>
      
      <Route path="/l" element={<BoatRentalForm2 boatId={1}/>}/>
        <Route path="/" exact component={Miami} />
        <Route path="/moreDD/:boatId" element={<MoreDD/>} />
      
      

    </Routes>
    </BrowserRouter>
    
  
    
    
    
    </div>
  );
}

export default App;
