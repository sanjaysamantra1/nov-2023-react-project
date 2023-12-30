import React from "react";

export default function ToDoList({ todos,deleteToDo,toggleToDo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.completed
                    ? { "text-decoration": "line-through" }
                    : { "text-decoration": "none" }
                }
              >
                {todo.text}
              </span>
              <button className="btn btn-primary m-1" onClick={()=>{
                toggleToDo(todo.id)
              }}>Toggle</button>
              <button className="btn btn-danger" onClick={()=>{
                deleteToDo(todo.id);
              }}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
