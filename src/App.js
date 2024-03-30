
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage'
import CoxBazar from './pages/Cox\'sBazar';
function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}    />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/reg" element={<RegPage/>} /> 
      <Route path="/cox" element={<CoxBazar/>} /> 

      

    </Routes>
    </BrowserRouter>
    
  
    
    
    
    </div>
  );
}

export default App;
