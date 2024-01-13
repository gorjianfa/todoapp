import "./assets/App.css";
import React from "react";

import TodoList from "./components/TodoList";



import {useNavigate} from "react-router-dom";
function App() {
  const navigate=useNavigate( )
  return (
    <div>
    <div className="bg-info bg-gradient p-3">  <button className="p-1 btn btn-outline-secondary"  onClick={()=>{
    navigate('/information')
}}>SignUp / LogIn</button></div>
     <TodoList />
    </div>
  );
}

export default App;
