import React from "react";

function TodoList({todos,onTodoChange,onTodoDelete}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onTodoChange} onDelete={onTodoDelete} />
        </li>
      ))}
    </ul>
  );
}

function Todo({todo,onChange,onDelete}) {
  return (
    <>
      <input
        type="checkbox" name=
        {`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} onChange={(e)=>onChange({...todo,done:e.target.checked})}
      />
      {todo.text}
      <button onClick={()=>onDelete(todo.id)}>X</button>

    </>
  );
}

export default TodoList;
