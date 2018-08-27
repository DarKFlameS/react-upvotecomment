export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_CHILDREN = 'UPDATE_CHILDREN';

export const addComment = (text) => ({
  type: ADD_COMMENT,
  text
});

export const updateChildren  = (id, children) => ({
  type: UPDATE_CHILDREN,
  parent_id: id,
  children: children
});