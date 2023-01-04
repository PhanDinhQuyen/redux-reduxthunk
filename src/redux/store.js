// import { createStore } from "redux";
// import rootReducer from "./reducer";

// import {
//   composeWithDevTools,
//   // devToolsEnhancer,
// } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../components/Filters/FiltersSlice";
import { todoListSlice } from "../components/TodoList/TodoListSlice";

const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export default store;
