/* global expect, it, describe */

import { reducer, initialState } from ".";
import types from "../constants/";

describe("Reducer", () => {
  const todoText = "A todo";

  it("Should return the initial state when no action passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Submit todo", () => {
    it("Should return the correct state", () => {
      // mock/setup the action to test the reducer with
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText
      };
      // define the state we expect the reducer to output
      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deletedTodos: []
      };
      // expect that given 'action' and no initialState as an arg
      // the reducer outputs an expected state
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe("Delete todo", () => {
    it("Should return the correct state", () => {
      // mock/setup the starting state to test the reducer with
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deletedTodos: []
      };
      // mock/setup the starting action to test the reducer with
      const action = {
        type: types.DELETE_TODO,
        id: 1
      };
      // define the state we expect the reducer to output
      const expectedState = {
        todos: [],
        deletedTodos: [
          {
            id: 1,
            text: todoText
          }
        ]
      };
      // expect that given 'action' and a startingState as an arg
      // the reducer outputs an expected state
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("Undelete todo", () => {
    it("Should return the correct state", () => {
      const startingState = {
        todos: [],
        deletedTodos: [
          {
            id: 1,
            text: todoText
          }
        ]
      };

      const action = {
        type: types.UNDELETE_TODO,
        id: 1
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deletedTodos: []
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
