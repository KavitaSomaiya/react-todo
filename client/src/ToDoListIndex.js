
import React from "react"
import ReactDOM from "react-dom"

import "./ToDoList.css"
import TodoList from "./TodoList"
  
var destination = document.querySelector("#ToDoListRoot")
  
ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
)