// const intialState = {
//   search: "",
//   status: "All",
//   prioriry: [],
// };

// const filterReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filter/prioriryFilterChange":
//       return {
//         ...state,
//         prioriry: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";
export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    prioriry: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioriryFilterChange: (state, action) => {
      state.prioriry = action.payload;
    },
  },
});
