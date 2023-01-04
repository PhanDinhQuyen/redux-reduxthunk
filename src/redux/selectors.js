import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList.todos;
export const statusListSelector = (state) => state.todoList.status;
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const priorirySelector = (state) => state.filters.prioriry;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  priorirySelector,
  (todoList, searchText, status, prioriry) => {
    const todosFilter = todoList
      .filter((todo) =>
        todo.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .filter((todo) =>
        prioriry.length === 0 ? true : prioriry.includes(todo.prioriry)
      );

    if (status === "All") return todosFilter;

    return todosFilter.filter((todo) =>
      status === "Completed" ? todo.completed : !todo.completed
    );
  }
);
