import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = ({ title, checked }) => {

  const todos = useSelector(state=>state.todo.todos)

  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} 0개]</p>
      <ul className="todo-list-ul">
        {todos &&
          todos.map((todo) => {
            if (todo.complete === checked) {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                />
              )
            } else {
              return null
            }
          })}
      </ul>
    </div>
  )
}

export default TodoList
