import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import DeletedList from "./components/deletedList";
import actions from "./actions/";

export const App = ({
  submitTodo,
  todos,
  deletedTodos,
  deleteTodo,
  undeleteTodo
}) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} />
    <DeletedList deletedTodos={deletedTodos} undeleteTodo={undeleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  deletedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: text => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: id => {
    dispatch(actions.deleteTodo(id));
  },

  undeleteTodo: id => {
    dispatch(actions.undeleteTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
