import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginScreen.js'
//import ItemsList from './ItemsList.js';   // Import the Home component (your custom page)
import Signup from './SignUp.js';  // Import the Signup component
import ItemDetails from './ItemDetails'; // Create this as a placeholder
import AddUser from './AddUser'; // Create this as a placeholder
import ItemsList from './ItemsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
        <Route path="/add-user" element={<AddUser />} />  
        <Route path="/itemslist" element={<ItemsList />} />
      </Routes>
    </Router>
  );
}

export default App;
