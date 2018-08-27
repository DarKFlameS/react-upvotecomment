import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateChildren } from '../actions/commentActions'
import Counter from './Counter'

const uuidv1 = require('uuid/v1');

const Comment = (props) => (
  <div className="main-comment">
    <div className="comment-container">
      <div className="counter">
        <Counter commentId={props.comment.id} count={props.comment.count} key={Date.now()} />
      </div>
      <div className="comment-area">
        <p>{props.comment.text}</p>
        <div className="reply-container">
          <form className="reply-form" onSubmit={(e) => {
            e.preventDefault();
            let text = e.target.elements.text.value.trim();
            e.target.elements.text.value = '';

            let children = props.comment.children;
            children.push({
              id: uuidv1(),
              text: text,
              count: 0,
              children: []
            });

            props.dispatch(updateChildren(props.comment.id, children));
          }}>
            <input type="text" name="text" id="reply-text" />
            <button className="reply" type="submit">Reply</button>
          </form>
        </div>
      </div>
    </div>
    { props.comment.children.map((child) => <Comment comment={child} child={true} key={child.id} dispatch={props.dispatch} />) }

  </div>
)

export default connect()(Comment);