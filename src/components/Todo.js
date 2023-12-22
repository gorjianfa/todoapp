import React, { useState } from "react";
import trashImg from "../image/trash.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function Todo({ todos, completeTodo, removeTodo,args }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
          <button className=" btn-danger btn mt-1" onClick={toggle}>
            <img src={trashImg} />
          </button>

          <Modal isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>are you sure to remove your item?</ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={() => removeTodo(todo.id)}>
                delet
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  ));
}

export default Todo;
