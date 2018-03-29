import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'

export default class Comment extends React.Component
{
  constructor(props) {
    super(props);

    this.handleReplySubmit = this.handleReplySubmit.bind(this);

    this.state = {
      children: []
    };
    
  }

  handleReplySubmit(e) {
    e.preventDefault();

    let text = e.target.elements.text.value.trim();
    e.target.elements.text.value = '';

    let children = this.state.children;
    children.push({
      text: text,
      count: 0
    });

    this.setState({children: children});
  }

  render () {
    return (
      <div className="main-comment">
        <div className="comment-container">
          <div className="counter">
            <Counter count={this.props.count || 0} />
          </div>
          <div className="comment-area">
            <p>{this.props.text}</p>
            <div className="reply-container">
              <form className="reply-form" onSubmit={this.handleReplySubmit}>
                <input type="text" name="text" id="reply-text" />
                <button className="reply" type="submit">Reply</button>
              </form>
            </div>
          </div>
        </div>
        {this.state.children.map((child) => <Comment text={child.text} count={child.count} child={true} />)}

      </div>
    );
  }
}