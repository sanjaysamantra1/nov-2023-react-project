import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoAdd from "./ToDoAdd";

let todoArr = [
  { id: 1, text: "Todo-1", completed: false },
  { id: 2, text: "Todo-2", completed: true },
  { id: 3, text: "Todo-3", completed: false },
];

export default function ToDoDemo() {
  const [todos, setTodos] = useState(todoArr);

  const deleteToDo = (id) => {
    let remainingToDos = todos.filter((todo) => todo.id !== id);
    setTodos([...remainingToDos]);
  };
  const toggleToDo = (id) => {
    let ModifiedArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...ModifiedArr]);
  };

  const addToDo = (todoObj) => {
    setTodos([...todos, todoObj]);
  };

  return (
    <>
      <h1 className="text-center">ToDo CRUD Example</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <ToDoList
              todos={todos}
              deleteToDo={deleteToDo}
              toggleToDo={toggleToDo}
            />
          </div>
          <div className="col-sm-4">
            <ToDoAdd addToDo={addToDo} />
          </div>
        </div>
      </div>
    </>
  );
}
