// TodoList
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

// Filter
export const searchFilterChange = (data) => {
  return {
    type: "filter/searchFilterChange",
    payload: data,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const prioriryFilterChange = (prioriry) => {
  return {
    type: "filter/prioriryFilterChange",
    payload: prioriry,
  };
};
// Todo

export const checkedTodo = (id) => {
  return {
    type: "todoList/checkedTodo",
    payload: id,
  };
};
