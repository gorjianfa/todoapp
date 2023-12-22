import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import DeleteConfirmation from "./components/DeleteConfirmation";

function App() {
  return (
    <div>
      <TodoList />
      <DeleteConfirmation/>
    </div>
  );
}

export default App;
