import React, { Component } from "react";
import AddToDo from "../addToDoForm";
import ListToDos from "../LIstToDos/index";
import ToDo from "../Todo";
export default class ToDoListApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "di mua sting"
      },
      { id: 2, content: "di an sang" },
      { id: 3, content: "di hoc react" }
    ]
  };
  render() {
    return (
      <div className="container">
        <AddToDo></AddToDo>
        <ListToDos>
          {this.state.todos.map(todo => {
            return <ToDo key={todo.id} content={todo.content} />;
          })}
        </ListToDos>
      </div>
    );
  }
}
