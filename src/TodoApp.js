import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(todo) {
    const newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  //TODO: refactor as map
  // todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
  function update(updatedTodo) {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    // const copyTodos = [...todos];

    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === updatedTodo.id) {
    //     copyTodos.splice(i, 1, updatedTodo);
    //     setTodos(copyTodos);
    //   }
    // }
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(t => t.id !== id));
  }
  //TODO: reformat ternary.
  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos.length > 0 
            ? <EditableTodoList todos={todos} update={update} remove={remove} />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            {todos.length > 0 
            && (
              <div>
                <h3>Top Todo</h3>
                <TopTodo todos={todos} />
              </div>
            ) }
          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
