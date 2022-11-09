import React from 'react'
import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

let nextId=4;
const initialTodos=[
{ id: 1, text: "Learn javaScript", done:true },
{ id: 2, text: "Learn React", done: false },
{ id: 3, text: "Learn Node", done: false },]

function TodoApp() {
    const [todos, setTodos] = useState(initialTodos)

    function handleAddTodo(text){
        setTodos([...todos,{ id: nextId++, text, done: false }])
    }
        function handleChangeTodo(updatedTodo){
          setTodos(todos.map((existingTodo)=>{
            if(existingTodo.id===updatedTodo.id){
              return updatedTodo;
            }
            else{
              return existingTodo
            }
          }))
        }
        
        function handleDeleteTodo(todoId){
          setTodos(todos.filter((todo)=>todo.id!=todoId))

        }

        return (
          <div>
        <h1>Todos</h1>
        <AddTodo onAddTodo={handleAddTodo}/>
        <TodoList todos={todos} onTodoChange={handleChangeTodo} onTodoDelete={handleDeleteTodo}/>
    </div>
  )
}


export default TodoApp