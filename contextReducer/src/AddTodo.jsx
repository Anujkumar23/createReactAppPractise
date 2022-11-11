
import { useState } from "react";
import { useDispatch } from "./TodosContext";
 
let nextId=4;
export default function AddTodo() {
  const dispatch = useDispatch()

  const [text, setText] = useState("");

  return (
    <div>
      <input
      
        type="text"
        name="newTodo"
        id="newTodo"
        placeholder="add a todo.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
         dispatch({
          type:"add",
          id:nextId++,
          text,
         })
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
