import React from 'react'

export default function ToDoAdd({addToDo}) {
  return <>
        <p>Id : <input /></p>
        <p>text : <input /></p>
        <button type="button" 
        onClick={()=>{addToDo({id:4,text:'Todo-4'})}}>Add</button>
  </>
}
