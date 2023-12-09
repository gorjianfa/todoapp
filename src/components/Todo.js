import React, { useState } from "react";
import trashImg from "../image/trash.svg";
function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div className="">
      <div className="flex-between  bg-light mb-2 rounded pb-1" key={index}>
        <ul
          className="todo-text list-group list-group-flush "
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
        >
          <li className="list-group-item bg-light">{todo.text}</li>
        </ul>
        <div>
          <button
            className=" btn-danger btn mt-1"
            onClick={() => removeTodo(todo.id)}
          >
            <img src={trashImg} />
          </button>
        </div>
      </div>
    </div>
  ));
}

export default Todo;
