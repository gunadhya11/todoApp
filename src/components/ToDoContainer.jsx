import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Modal from "./Modal";
import AddToDoComponent from "./AddToDoComponent";

const ToDoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const completeTodo = (id) => {
    const todoTemp = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: true };
      } else return item;
    });

    setTodoList(todoTemp);
  };
  const addNewTodo = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleAddButtonClick = (inputValue) => {
    if (inputValue) {
      setShowModal(false);
      setTodoList([
        ...todoList,
        { text: inputValue, isComplete: false, id: todoList.length },
      ]);
    }
  };

  const todoListComponent = todoList.map((item) => (
    <ToDoItem {...item} completeTodo={completeTodo} />
  ));

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center h-screen">
        <div className="md:w-1/3 mx-auto my-auto ">
          <h1 className="text-2xl font-bold mb-4">ToDoContainer</h1>
          <div className="rounded-3xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <ul className="min-h-min max-h-72 overflow-scroll">{todoListComponent}</ul>
            <button
              onClick={addNewTodo}
              className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 shadow-xl border-gray-500 border p-3 px-4 rounded-full hover:bg-orange-400"
            >
              Add To do Item
            </button>
            <Modal
              showModal={showModal}
              headerText={"add to do item"}
              closeModal={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              <AddToDoComponent handleAddButtonClick={handleAddButtonClick} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
