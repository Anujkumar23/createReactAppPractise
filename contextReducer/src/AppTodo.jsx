import React from "react";
import AddTodo from "./AddTodo";
import CompletedTodos from "./CompletedTodos";
import TodoList from "./TodoList";
import TodosProvider from "./TodosContext"





function AppTodo() {
  
    return (
     <TodosProvider>
      <h1>Todos</h1>
      <AddTodo/>
      <TodoList/>
      <CompletedTodos/>
     </TodosProvider>

    );
  }


export default AppTodo;