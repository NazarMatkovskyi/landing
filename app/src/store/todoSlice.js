import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    return []
  }
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadState(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveState(state);
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveState(state);
      }
    },
    editTodoAction: (state, action) => { // New reducer for editing a
      const { id, title, subtitle } = action.payload;
      const todoToEdit = state.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.title = title;
        todoToEdit.subtitle = subtitle;
        saveState(state);
      }
    },
    filterTodos: (state, action) => {
      const filterType = action.payload.filterType;
      switch (filterType) {
        case 'completed':
          return state.filter(todo => todo.completed);
        case 'current':
          return state.filter(todo => !todo.completed);
        default:
          return state;
      }
    },
  },
});

export const { addTodo,editTodoAction, toggleTodo, deleteTodo, filterTodos } = todoSlice.actions;
export default todoSlice.reducer;
