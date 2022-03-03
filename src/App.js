import Header from './components/header';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from './components/SearchPage';




function App() {
  return (
    <div>

       <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/searchPage/:iconName" element={<SearchPage />} />
      </Routes>
   
    
    </div>
  );
}

export default App;
