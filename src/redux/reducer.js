import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoListSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
