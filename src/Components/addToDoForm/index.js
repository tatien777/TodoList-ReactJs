import React, { Component } from 'react'

export default class AddToDo extends Component {
    render() {
        return (
            <div className="row">
            <div className="col m12">
              <form>
                <div className="row">
                  <div className="input-field col s11">
                    <input
                      placeholder=" What task u want to add"
                      id="add_todo"
                      type="text"
                      className="validate"
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
        )
    }
}
