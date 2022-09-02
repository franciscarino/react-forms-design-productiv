import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import EditableTodo from "./EditableTodo";
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";

//test renders

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

// let testTodoAppResult;

//if no todos on page, don't show any todos

describe("editable todo list", function () {
  it("no todos shown if no todos", function () {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("You have no todos.")).toBeInTheDocument();
  });

  it("displays todos", function () {
    // expect.hasAssertions(3)

    const result = render(<TodoApp initialTodos={testTodos} />);
    expect(result.getByText("Code!")).toBeInTheDocument();
    expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();

    //QUESTION: is there a way to get all three listed in one expect,
    //and  without re-rendering each time
    expect(result.queryByText("Write some code")).toBeInTheDocument();
    // expect(result.queryByText("Go to bed")).toBeInTheDocument();
  });
});

describe("top todo", function () {
  it("shows nothing if no todos", function () {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("Top Todo")).not.toBeInTheDocument();
  });
  it("displays top todo", function () {
    const result = render(<TodoApp initialTodos={testTodos} />);
    expect(result.getByText("Top Todo")).toBeInTheDocument();
  });
});
