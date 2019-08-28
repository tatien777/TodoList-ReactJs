import React, { Component } from "react";

export default class ToDo extends Component {
  render() {
    // console.log(this.props.content)
    return (
      <div className="card">
        <div className="row" style={{ padding: "10px" }}>
          <div className="col s11">
            <h5 style={{ margin: "0px", color: "red" }}> {this.props.content}</h5>
          </div>
          <div className="col s1">
            <a className="waves-effect waves-teal btn-flat">
              <i className="material-icons">close</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
