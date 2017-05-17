import React, { Component } from 'react';
// import logo from './logo.svg';
import './Post.css';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0,
      commentsList: props.post.comments,
      newComment: '',
      title: props.post.title,
      author: props.post.author,
      body: props.post.body
    }
  }

  increaseCounter() {
    this.setState({
      clickCounter: this.state.clickCounter + 1
    })
  }

  reduceCounter() {
    this.setState({
      clickCounter: this.state.clickCounter - 1
    })
  }

  resetCounter() {
    this.setState({
      clickCounter: 0
    })
  }

  newComment(e) {
    e.preventDefault()
    //target the form
    var form = e.target
    //query the input
    var input = form.querySelector('input')
    console.log(input.value)
    console.log(`new comment is ${input.value}`);

    const currentCommentList = this.state.commentsList
    // currentCommentList.push(input.value)

    this.setState({
      commentsList: this.state.commentsList.concat(input.value),
      newComment: ''
    })
  }

  commentInputChange(e) {
    e.preventDefault()
    this.setState({
      newComment: e.target.value
    })
  }

  handleChange(e) {
    e.preventDefault()
    console.log(e.target.value)

    this.setState({
      body: e.target.value

    })
  }

  render() {
    let commentsList = this.state.commentsList.map(function(comment, index) {
      return <li key={index}>{comment}</li>
    })

    let newComment = this.state.newComment ? <li>{this.state.newComment}</li> : " "

    return (
      <div className = "Post">
        <div>
          <h1 className="Post-h">{this.state.title}</h1>
          <h3># button clicked {this.state.clickCounter}</h3>
          <button onClick={(e) => this.increaseCounter(e)}>Add</button>
          <button onClick={(e) => this.reduceCounter(e)}>Minus</button>
          <button onClick={(e) => this.resetCounter(e)}>Reset</button>
          <p>{this.state.author}</p>
        </div>
        <div>
          <p>{this.state.body}</p>
          <label>
            New Body:
            <input type="text" onChange={(e) => this.handleChange(e)}></input>
          </label>
          <h3 className="Post-h">Comments</h3>
          <form onSubmit={(e) => this.newComment(e)}>
            <label>
              New Comment:
              <input type="text" onChange={(e) => this.commentInputChange(e)} value={this.state.newComment}></input>
            </label>
              <button>Submit</button>
          </form>
          <div>
            {commentsList}
            {newComment}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
