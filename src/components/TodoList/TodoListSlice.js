//  const intialState = [
//   {
//     id: 1,
//     name: "Code",
//     completed: true,
//     prioriry: "Medium",
//   },
// ];

// const todoListReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/checkedTodo":
//       return [...state].map((todo) =>
//         todo.id === action.payload.id
//           ? {
//               ...todo,
//               completed: todo,
//             }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET, PATCH, POST } from "../../request";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    checkedTodo: (state, action) => {
      const current = state.todos.find((todo) => todo.id === action.payload);
      current.completed = !current.completed;
    },
  },
  extraReducers: (builder) => {
    // Get all todo
    builder.addCase(fetchTodo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchTodo.rejected, (state) => {
      // state.todos = action.payload;
      state.status = "err";
    });
    // Add new todo
    builder.addCase(addNewTodo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      // console.log(action);
      state.todos.push(action.payload);
      state.status = "idle";
    });
    // Cheked todo
    builder.addCase(checkTodo.fulfilled, (state, action) => {
      const current = state.todos.find((todo) => todo.id === action.payload);
      current.completed = !current.completed;
      state.status = "idle";
    });
  },
});

// export function addTodos(todo) {
//   return function addTodoThunks(dispatch, getState) {
//     console.log(["addTodoThunks"], getState());
//     console.log(todo);
//   };
// }

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const data = await GET();
  return data?.todos;
});
export const addNewTodo = createAsyncThunk("todo/addNewTodo", async (data) => {
  const res = await POST(data);
  console.log({ res });
  return data;
});

export const checkTodo = createAsyncThunk("todo/checkTodo", async (id) => {
  const res = await PATCH({ id });
  const data = await GET();
  console.log(["data"], data);
  return id;
});
