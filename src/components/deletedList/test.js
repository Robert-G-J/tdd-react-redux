/* global describe,it, expect */

import React from "react";
import { shallow } from "enzyme";
import DeletedList from ".";

describe("DeletedList component", () => {
  const undeleteMock = jest.fn();

  const props = {
    deletedTodos: [
      {
        id: 1,
        text: "A deleted todo"
      }
    ],
    undeleteTodo: undeleteMock
  };

  const component = shallow(<DeletedList {...props} />);

  it("Should render successfully", () => {
    expect(component.exists()).toEqual(true);
  });

  it("Should display a deleted todo when passed as a prop", () => {
    expect(component.find(".deleted-todo-text").text()).toEqual(
      props.deletedTodos[0].text
    );
  });

  it("Should call the undeleteTodo fn when 👆 button is clicked", () => {
    expect(undeleteMock.mock.calls.length).toEqual(0);
    component.find(".deleted-todo-undelete").simulate("click");
    expect(undeleteMock.mock.calls.length).toEqual(1);
  });
});
