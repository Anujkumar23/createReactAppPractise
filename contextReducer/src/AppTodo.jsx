import React from "react";
import { useReducer } from "react";
import todoReducer from "./TodoReducer";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { createContext } from "react";


const initialTodos = [
  { id: 1, text: "Learn javaScript", done: true },
  { id: 2, text: "Learn React", done: false },
  { id: 3, text: "Learn Node", done: false },
];

export const TodosContext=createContext(null)
  export const TodosDispatchContext=createContext(null)



function AppTodo() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  

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
        <TodosContext.Provider value={todos}>
          <TodosDispatchContext value ={dispatch}>
        <h1>Todos</h1>
        <AddTodo />
        <TodoList
          todos={todos}onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete}
        />
        
          </TodosDispatchContext>
        </TodosContext.Provider>
       
      </div>
    );
  }


export default AppTodo;