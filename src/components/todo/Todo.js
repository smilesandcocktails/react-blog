import React, { Component } from 'react';
import Other from './Other.js'
// import './Todo.css';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.todo.title,
      list: props.todo.list,
    }
  }

  newTodo(e) {
    e.preventDefault()

    var form = e.target
    var input = form.querySelector('input')
    var list = this.state.list
    list.push({todo: input.value, vote: 0})
    this.setState ({
      list: list
    })
  }

  resetList(e) {
    e.preventDefault()

    this.setState ({
      list: []
    })
  }

  like(e) {
    var list = this.state.list
    var index = e.target.value
    var selected = list[index]
    selected.vote += 1

    list.splice(index, 1, selected)

    this.setState ({
      list: list
    })
  }

  dislike(e) {
    var list = this.state.list
    var index = e.target.value
    var selected = list[index]
    console.log(selected)
    selected.vote -= 1

    list.splice(index, 1, selected)

    this.setState ({
      list: list
    })
  }

  remove(e) {
    var list = this.state.list
    var index = e.target.value
    var selected = list[index]

    list.splice(index,1)

    this.setState ({
      list: list
    })
  }

  render() {

    let todoList = this.state.list.map((list, index) => {
      return<div key={index}>
        < Other todoList={list}  />
        <button onClick={(e) => this.like(e)} value={index}>Like</button>
        <button onClick={(e) => this.dislike(e)} value={index}>Dislike</button>
        <button onClick={(e) => this.remove(e)} value={index}>Remove</button>
      </div>
    })

    return (
      <div className = "Todo">
        <div>
          <h1>{this.state.title}</h1>
        </div>
        <div>
          <h3>List</h3>
            {todoList}
        </div>
        <div>
          <form onSubmit={(e) => this.newTodo(e)}>
            <label>
              New Todo:
              <input type="text"></input>
            </label>
            <button>Submit</button>
          </form>
        </div>
        <div>
          <button onClick={(e) => this.resetList(e)}>Finished the List!</button>
        </div>
      </div>
    );
  }
}

export default Todo;
