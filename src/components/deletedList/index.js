import React from "react";
import PropTypes from "prop-types";

const DeletedList = ({ deletedTodos, undeleteTodo }) => {
  const deletedItems = deletedTodos.map(todo => (
    <li key={todo.id}>
      <button
        type="button"
        className="deleted-todo-undelete"
        onClick={() => undeleteTodo(todo.id)}
      >
        👆
      </button>
      <span className="deleted-todo-text">{todo.text}</span>
    </li>
  ));
  return <ul>{deletedItems}</ul>;
};

DeletedList.propTypes = {
  deletedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  undeleteTodo: PropTypes.func.isRequired
};

export default DeletedList;
