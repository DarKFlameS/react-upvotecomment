import React from 'react';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { addComment } from '../actions/commentActions'
import '../styles/upvotecomment.css';

const UpvoteComment = (props) => (
  <div>
    <h1 className="app-title">{props.title}</h1>

    <div className="comment-form-container">
      <form className="comment-form" onSubmit={(e) => {
        e.preventDefault();
        let text = e.target.elements.text.value.trim();
        e.target.elements.text.value = "";
        props.dispatch(addComment(text))
      }}>
        <input type="text" name="text" />
        <button className="reply" type="submit">Add Comment</button>
      </form>
    </div>

    <CommentList />
  </div>
);

export default connect()(UpvoteComment);