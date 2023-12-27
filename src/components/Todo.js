import React, { useState } from "react";
import trashImg from "../assets/image/trash.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function Todo({ todos, completeTodo, removeTodo, args }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
            <img src={trashImg} alt="" />
          </button>

          <Modal isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>remove item</ModalHeader>
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
