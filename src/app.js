import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UpvoteComment from './components/UpvoteComment';
import configureStore from './store/configureStore';
import { addComment } from './actions/commentActions';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <UpvoteComment title="Upvote Comment" />
  </Provider>,

  document.getElementById('app')
);
