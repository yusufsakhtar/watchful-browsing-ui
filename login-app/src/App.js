import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginScreen.js'
import Home from './Home.js';   // Import the Home component (your custom page)
import Signup from './SignUp.js';  // Import the Signup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />  
        <Route path="/signup" element={<Signup />} />  
      </Routes>
    </Router>
  );
}

export default App;
