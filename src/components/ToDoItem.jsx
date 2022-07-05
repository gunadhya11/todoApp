import React from "react";
import PropTypes from "prop-types";

const ToDoItem = ({ text, id, completeTodo, isComplete }) => {
  return (
    <li
      key={id}
      onClick={() => completeTodo(id)}
      className={`p-3 border-2 text-white font-bold  rounded-full mb-3 border-white ${
        isComplete ? "opacity-20" : ""
      }`}
    >
      {text}
    </li>
  );
};

ToDoItem.propTypes = {};

export default ToDoItem;
