import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const testTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

const emptyTodos = [];

describe("top todo", function () {
  it("shows nothing if no todos", function () {
    const result = render(<TopTodo todos={emptyTodos} />);
    expect(result.queryByText("priority")).not.toBeInTheDocument();
  });
  it("displays top todo", function () {
    const result = render(<TopTodo todos={testTodos} />);
    // expect(result.getByText("Top Todo")).toBeInTheDocument();
    expect(result.queryByText("Make dinner")).toBeInTheDocument();
    expect(result.queryByText("Code!")).not.toBeInTheDocument();
  });
});
