import types from "../constants/";

export const initialState = {
  todos: [],
  deletedTodos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text
          }
        ]
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
        deletedTodos: [
          ...state.deletedTodos,
          ...state.todos.filter(todo => todo.id === action.id)
        ]
      };

    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          ...state.deletedTodos.filter(todo => todo.id === action.id)
        ],
        deletedTodos: [
          ...state.deletedTodos.filter(todo => todo.id !== action.id)
        ]
      };

    default:
      return state;
  }
};

export default reducer;
