import update from 'immutability-helper';
import {
  ADD_COMMENT,
  UPDATE_CHILDREN
} from '../actions/commentActions'

const uuidv1 = require('uuid/v1');

const comments = (state = [], action) => {
  switch(action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: uuidv1(),
          text: action.text,
          count: 0,
          children: [],
          updated: Date.now()
        }
      ];
    case UPDATE_CHILDREN:
      var newstate = state.map((comment) => (
        comment.id == action.parent_id ? { ...comment, updated: Date.now() } : {...comment} 
      ));

      return [
        ...newstate
      ];
    default: return state;
  }
};

export default comments;