import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home";
import About from "./components/about";
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
 import Error from "./components/error";
import Information from "./components/information";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Router>
  <Routes>
    <Route path="/home" element={<Home />} />

    <Route path="/" element={<App />} />
    <Route path="/information" element={<Information />} />
     <Route path='*' element={<Error />}/></Routes>
     <Route path="/about" element={<About />} />
 </Router>
  
  </React.StrictMode>

);
