import React from "react";
import { useReducer } from "react";
<<<<<<< HEAD
import todoReducer from "./TodoReducer";
=======

>>>>>>> 4e86cf67102108b360d5129a60f83c8e90ac7b74
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

let nextId = 4;
const initialTodos = [
  { id: 1, text: "Learn javaScript", done: true },
  { id: 2, text: "Learn React", done: false },
  { id: 3, text: "Learn Node", done: false },
];

<<<<<<< HEAD

=======
function todoReducer(todos, action) {
  const { type } = action;
  switch (type) {
    case "add":
      const { id, text } = action;
      return [...todos, { id, text, done: false }];

    case "change":
      const updatedTodo = action.todo;
      return todos.map((existingTodo) => {
        if (existingTodo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return existingTodo;
        }
      });
    case "remove":
      const todoId = action.id;
      return todos.filter((todo) => todo.id !== todoId);
  }
}
>>>>>>> 4e86cf67102108b360d5129a60f83c8e90ac7b74

function AppTodo() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  function handleAddTodo(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text,
    });
}

    function handleTodoChange(updatedTodo) {
      dispatch({
        type: "change",
        todo: updatedTodo,
      });
    }

    function handleTodoDelete(todoId) {
      dispatch({
        type: "remove",
        id: todoId,
      });
    }
    return (
      <div className="main">
        <h1>Todos</h1>
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onTodoChange={handleTodoChange}
          onTodoDelete={handleTodoDelete}
        />
      </div>
    );
  }


<<<<<<< HEAD
export default AppTodo;
=======
export default AppTodo;
>>>>>>> 4e86cf67102108b360d5129a60f83c8e90ac7b74
