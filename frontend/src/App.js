import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
 
  return (
    <Router>
    <>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    
    
    </>
    </Router>
  );
}

export default App;
