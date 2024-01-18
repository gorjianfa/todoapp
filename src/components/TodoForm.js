import React, { useState } from "react";
import addImage from "../assets/image/plus.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoForm(props) {
  const [input, setInput] = useState("");
  const notify = () => toast("Adding the character was successful");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="">
      <form className="flex mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={input}
          name="text"
          className="input border border-info"
          onChange={handleChange}
        />
        <div>
        <button onClick={notify} className=" btn btn-info ">
       
          <img src={addImage} className="" alt="" />
        </button> <ToastContainer  position="top-left"/>
        </div>
       
      </form>
    </div>
  );
}

export default TodoForm;
