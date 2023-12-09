import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="background">
     
      <div className="flex-justify">
        <div className="flex-column card">
          <TodoForm onSubmit={addTodo} />

          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />

          <div className="flex-between mt-3">
            <span className="pending">
              You have <span  className="text-success  h3">{todos.length} </span>pending tasks
            </span>
            <button className="  btn btn-primary">clear all</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
