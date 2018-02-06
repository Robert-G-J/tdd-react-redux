import React from "react";
import { shallow, mount } from "enzyme";
import AddTodo from ".";

describe("AddTodo component", () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = mount(<AddTodo submitTodo={submitMock} />);
  });

  it("Should render successfully", () => {
    expect(component.exists()).toEqual(true);
  });

  it("Should have one input", () => {
    expect(component.find(".todo-input").length).toEqual(1);
  });

  describe("Add todo button", () => {
    it("Should exist", () => {
      expect(component.find(".todo-submit").length).toEqual(1);
    });

    it("Should call the submitTodo function when clicked", () => {
      expect(submitMock.mock.calls.length).toEqual(0);
      component.find("form").simulate("submit");
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});