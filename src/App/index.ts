import { applyMiddleware, combineReducers, createStore } from "redux";
import { currentUserReducer } from "../features/currentUser/currentUserSlice";
import { initialCurrentUser } from "../features/currentUser/currentUserSlice";
import { todosReducer } from "../features/todos/todosSlice";
import { todosContent } from "../features/todos/todosSlice";
import thunk from "redux-thunk";

//example of middleware

// const logger = (store: any) => (next: any) => (action: any) => {
//   console.log(state);
//   console.log(action);
//   return next(action);
// };

export const state = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer,
  }),
  {
    currentUser: initialCurrentUser,
    todos: todosContent,
  },
  applyMiddleware(thunk)
);
