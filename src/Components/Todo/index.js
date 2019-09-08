import React, { Component } from "react";

class ToDo extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.removeToDo(this.props.id);
    // alert(this.props.id)
  };
  handleFinish = e => {
    e.preventDefault();
    this.props.updateToDo(this.props.id);
  };

  render() {
    // console.log(this.props.content)
    return (
      <div
        className={`card ${this.props.status ? "done" : ""}`}
        onClick={this.handleFinish}
      >
        <div className="row" style={{ padding: "10px" }}>
          <div className="col s11">
            <h5 style={{ margin: "0px", color: "red" }}>
              {" "}
              {this.props.content}
            </h5>
          </div>
          <div className="col s1">
            <a
              className="waves-effect waves-teal btn-flat"
              onClick={this.handleClick}
            >
              <i className="material-icons">close</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDo;
