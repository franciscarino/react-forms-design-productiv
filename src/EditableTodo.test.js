import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditableTodo from "./EditableTodo";

let isEditing = false;

const testTodo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

it("todo form is displayed", function () {
  isEditing = true;
  const result = render(<EditableTodo todo={testTodo} />);
  expect(result.queryByText("Code!")).toBeInTheDocument();
  expect(result.queryByText("Edit")).toBeInTheDocument();
  expect(result.queryByText("Fluffy")).not.toBeInTheDocument();
});

// describe("top todo", function () {
//   it("shows nothing if no todos", function () {
//     const result = render(<TopTodo todos={emptyTodos} />);
//     expect(result.queryByText("priority")).not.toBeInTheDocument();
//   });
// });
