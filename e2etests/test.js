const expect = require("chai").expect;

describe("TodoList App", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql("Todo List");
  });

  it("Should allow me to create a Todo", () => {
    const todoText = "Get better at texting";
    browser.url("http://localhost:3000/");
    browser.element(".todo-input").setValue(todoText);
    browser.click(".todo-submit");
    const actual = browser.element(".todo-text").getText();

    expect(actual).to.equal(todoText);
  });

  it("Should allow me to delete a Todo", () => {
    const todoText = "Get rid of me";
    browser.url("http://localhost:3000/");
    browser.element(".todo-input").setValue(todoText);
    browser.click(".todo-submit");
    browser.click(".todo-delete");
    const actual = browser.element(".todo-text");

    expect(actual.state).to.equal("failure");
  });

  it("Should allow me to undelete a Todo", () => {
    const todoText = "Get better at stuff";
    browser.url("http://localhost:3000/");
    browser.element(".todo-input").setValue(todoText);
    browser.click(".todo-submit");
    browser.click(".todo-delete");
    const actual = browser.element(".deleted-todo-text").getText();
    console.log(actual);

    expect(actual).to.equal(todoText);

    browser.click(".deleted-todo-undelete");
    const restoredTodo = browser.element(".todo-text").getText();

    expect(restoredTodo).to.equal(todoText);
  });
});
