import React, { Component } from "react";
import AddToDo from "../addToDoForm";
import ListToDos from "../LIstToDos/index";
import ToDo from "../Todo";
export default class ToDoListApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "di mua sting",
        status: true
      },
      { id: 2, content: "di an sang", status: false },
      { id: 3, content: "di hoc react", status: false }
    ]
  };
  addToDo = newToDo => {
    let NewDoList = [...this.state.todos, newToDo];
    //  toDoList.push({id:Math.random(),content: 'Da them'})
    this.setState({ todos: NewDoList });
    console.log("ok");
  };
  removeToDo = id => {
    const newToDoList = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: newToDoList });
  };
  updateToDo = id => {
    let index = this.state.todos.findIndex(todo => {
      return todo.id === id;
    });
    let newToDoList = [...this.state.todos];
    const newStatus =  newToDoList[index].status;
    newToDoList[index].status = !newStatus;
    this.setState({ todos: newToDoList });
  };
  render() {
    return (
      <div className="container">
        <AddToDo addToDo={this.addToDo}></AddToDo>
        <ListToDos>
          {this.state.todos.map(todo => {
            return (
              <ToDo
                removeToDo={this.removeToDo}
                key={todo.id}
                status={todo.status}
                content={todo.content}
                id={todo.id}
                updateToDo={this.updateToDo}
              />
            );
          })}
        </ListToDos>
      </div>
    );
  }
}
