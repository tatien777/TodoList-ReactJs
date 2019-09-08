import React, { Component } from "react";

export default class AddToDo extends Component {
  state = {
    id : '',
    content: "Da them",
    status: false
  };

  handleSubmit = e => {
    if(this.state.content.trim() !=="") {
      e.preventDefault();
      this.props.addToDo({ id: Math.round(Math.random()*50), content: this.state.content,status: false });
      this.setState({ content: "" });
    }
    alert('wrong input')
  };
  handleChange = e => {
    this.setState({ content: e.target.value });
  };
  render() {
    // console.log(this.props.addToDo,'props')
    return (
      <div className="row">
        <div className="col m12">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s11">
                <input
                  placeholder=" What task u want to add"
                  id="add_todo"
                  type="text"
                  className="validate"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
                <label htmlfor="first_name">Todo Content</label>
              </div>
              <div className="col s1">
                <button
                  type="submit"
                  className="btn-floating btn-large waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
