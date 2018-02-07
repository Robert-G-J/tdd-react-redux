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
        ]
      };
      // expect that given 'action' and no initialState as an arg
      // the reducer outputs an expected state
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});