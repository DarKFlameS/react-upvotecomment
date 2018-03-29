import React from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends React.Component
{
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);

    this.state = {
      count: this.props.count
    }
  }

  handleUpvote() {
    this.setState({
      count: ++this.state.count
    });
  }

  handleDownvote() {
    this.setState({
      count: --this.state.count
    });
  }

  render () {
    return(
      <div className="counter">
        <button onClick={ this.handleUpvote } className="upvote">&#x25B2;</button>
        <div className="count">{this.state.count}</div>
        <button onClick={ this.handleDownvote } className="downvote">&#x25BC;</button>
      </div>
    );
  }
}
