const expect = require("chai").expect;

describe("TodoList App", () => {
  it("Should allow me to create a Todo", () => {
    const todoText = "Get better at texting";
    browser.url("http://localhost:3000/");
    browser.element(".todo-input").setValue(todoText);
    browser.click(".todo-submit");
    const actual = browser.element(".todo-text").getText();

    expect(actual).to.equal(todoText);
  });
});
