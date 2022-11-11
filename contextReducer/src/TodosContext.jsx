import React from 'react'
import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import TodoReducer from './TodoReducer';



const initialTodos = [
    { id: 1, text: "Learn javaScript", done: true },
    { id: 2, text: "Learn React", done: false },
    { id: 3, text: "Learn Node", done: false },
  ];
  
   const TodosContext=createContext(null)
   const TodosDispatchContext=createContext(null)

   
   function TodosProvider({children}) {
    const [todos, dispatch] = useReducer(TodoReducer, initialTodos);
     return (
        <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value ={dispatch}>
            {children}
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
     )
   }

   export const useTodos=()=>useContext(TodosContext)
   export const useDispatch=()=>useContext(TodosDispatchContext)
   
   export default TodosProvider

