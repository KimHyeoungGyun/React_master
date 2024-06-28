import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'

const TodoHome = () => {
  return (
    <div className="todo-container">
      <h1 className="todo-tit">ToDo List</h1>
      {/* todo 추가하는 영역 */}
      <TodoInput />

      {/* 해야할 일 출력 */}
      <TodoList
        title="해아할 일 :"
        checked={false}
      />

      {/* 완료된 일 출력 */}
      <TodoList
        title="완료된 일"
        checked={true}
      />
    </div>
  )
}

export default TodoHome
