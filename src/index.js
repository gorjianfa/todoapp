import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import About from "./pages/about";
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
 import Error from "./pages/error";
import Information from "./pages/information";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Router>
  <Routes>
    <Route path="/home" element={<Home />} />

    <Route path="/" element={<App />} />
    <Route path="/information" element={<Information />} />
     <Route path='*' element={<Error />}/>
     <Route path="/about" element={<About />} />
     </Routes>
 </Router>
 
  </React.StrictMode>

);
