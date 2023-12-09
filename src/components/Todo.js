import React, { useState } from "react";
import TodoForm from "./TodoForm";
function Todo({todos,completeTodo,removeTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div className="card"> 
    <div className="flex-between "
      key={index}
    >
      <div   className="todo-text"  key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <button className=" btn-danger btn" onClick={()=>removeTodo(todo.id)}>delet</button>
      </div>
    </div></div>
  ));
}

export default Todo;
