import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState:{
    todos:[]
  },
  reducers:{
    addTodo:(state, action)=>{
        console.log(action)
        state.todos = state.todos.concat(action.payload)
    },
    checkChangeTodo:(state, action)=>{
      state.todos = state.todos.map((item) => ({
        ...item,
        complete: item.id === action.payload.id ? !item.complete : item.complete,
      }))
    },
    textChangeTodo:(state, action)=>{
      state.todos = state.todos.map((item) => ({
        ...item,
        text: item.id === action.payload.id ? action.payload.text : item.text,
      }))
    },
    deleteTodo:(state, action)=>{
      state.todos= state.todos.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const TodoReducerActions = todoSlice.actions

export default todoSlice.reducer
