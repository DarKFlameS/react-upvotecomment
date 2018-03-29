import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import commentsData from '../data/comments.json';
import '../styles/upvotecomment.css';

export default class UpvoteComment extends React.Component
{
  constructor (props) {
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    this.state = {
      comments: commentsData
    };
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    let text = e.target.elements.text.value.trim();
    e.target.elements.text.value = "";

    let comments = this.state.comments;
    comments.push({
      text: text,
      count: 0
    });

    this.setState({comments: comments});
  }

  render () {
    return (
      <div>
        <h1 className="app-title">{this.props.title}</h1>

        <div className="comments">
          {this.state.comments.map( (comment, index) => <Comment text={comment.text} count={comment.count} key={index} /> )}
        </div>

        <div className="comment-form-container">
          <form className="comment-form" onSubmit={this.handleCommentSubmit}>
            <input type="text" name="text" />
            <button className="reply" type="submit">Add Comment</button>
          </form>
        </div>
      </div>
    );
  }
}