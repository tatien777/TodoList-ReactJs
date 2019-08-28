import React, { Component } from "react";

export default class ListToDos extends Component {
  render() {
    return (
        <div className="todos">
        {this.props.children}
        </div>
    );
  }
}
