import React from "react";
import PropTypes from "prop-types";

const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitTodo(input.value);
          input.value = "";
        }}
      >
        <input ref={element => (input = element)} className="todo-input" />

        <button type="submit" className="todo-submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired
};

export default AddTodo;
