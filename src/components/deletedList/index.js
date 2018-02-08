import React from "react";
import PropTypes from "prop-types";

const DeletedList = ({ deletedTodos, undeleteTodo }) => {
  const deletedItems = deletedTodos.map(todo => (
    <li key={todo.id}>
      <button type="button">👆</button>
      <span className="deleted-todo-text">{todo.text}</span>
    </li>
  ));
  return <ul>{deletedItems}</ul>;
};

export default DeletedList;
