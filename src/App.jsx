
import './App.css';
import EcommercePackages from './EcommercePackages';
import SchoolCollegePackages from './SchoolCollegePackages';
import WoocommercePackages from './WoocommercePackages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
      <Routes> 
        <Route path="/" element={<EcommercePackages />}  />
        <Route path="/woocommerce" element={<WoocommercePackages />}  />
        <Route path="/school-college" element={<SchoolCollegePackages />}  />
      </Routes>
    </Router>
    </>
  )
}

export default App
