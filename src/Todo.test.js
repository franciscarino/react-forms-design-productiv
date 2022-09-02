import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const testTodo = {
  id: 1,
  title: "Test!",
  description: "Write some tests",
  priority: 2,
};

let testTodoResult;

beforeEach(function () {
  testTodoResult = render(<Todo todo={testTodo} />);
});

describe("todo component", function () {
  it("renders without crashing", function () {
    render(<Todo todo={testTodo} />);
  });

  it("contains expected Todo item", function () {
    expect(testTodoResult.queryByText("Test!")).toBeInTheDocument();
  });
});
