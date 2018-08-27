import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

// nada
import '../styles/upvotecomment.css';

const CommentList = (props) => (
  <div className="comments">
    {props.comments.map( (comment) => <Comment comment={comment} key={comment.id} /> )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

export default connect(mapStateToProps)(CommentList);
