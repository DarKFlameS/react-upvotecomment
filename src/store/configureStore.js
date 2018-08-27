import { createStore } from "redux";
import commentReducer from "../reducers/commentReducer";

export default () => {
  const store = createStore(
    commentReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}