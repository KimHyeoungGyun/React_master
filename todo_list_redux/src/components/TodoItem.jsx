import React, { useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { TodoReducerActions } from '../redux/reducers/todoSlice'

const TodoItem = ({ todo }) => {
  const [newText, setnewText] = useState(todo.text)
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const handleCheckChange = () => {
    //   let updateList = todos.map((item) => ({
    //     ...item,
    //     complete: item.id === todo.id ? !item.complete : item.complete,
    //   }))
    //   setTodos(updateList)

    dispatch(
      TodoReducerActions.checkChangeTodo({
        id: todo.id,
      })
    )
  }

  // edited: 사용자가 수정버튼을 눌렀는지에 대한 상태
  // true : 수정 / false: 수정x
  const [edited, setEdited] = useState(false)

  const handleEditChange = () => {
    setEdited(true)
  }

  // 수정완료기능구현

  const handleSubmit = () => {
    // let updateList = todos.map((item) => ({
    //   ...item,
    //   text: item.id === todo.id ? newText : item.text,
    // }))
    // setTodos(updateList)

    dispatch(
      TodoReducerActions.textChangeTodo({
        id: todo.id,
        text: newText,
      })
    )

    setEdited(false)
  }

  //사용자가 입력한 값을 newText에 저장
  // const handleEditText = (e) =>{
  //   setnewText(e.target.value)
  //   console.log(newText)
  // }

  const handleDelete = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      console.log('삭제할 todo의 id:', id)
      // let updateList = todos.filter((item) => item.id !== id)
      // setTodos(updateList)
      dispatch(
        TodoReducerActions.deleteTodo({
          id: todo.id,
        })
      )
    }
  }
  return (
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      ) : (
        <FaRegCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      )}

      {edited ? (
        <input
          type="text"
          className="todo-item-edit-input"
          value={newText}
          onChange={(e) => setnewText(e.target.value)}
        />
      ) : (
        <span
          className={`todo-item-content
           ${todo.complete ? 'todo-item-content-checked' : ''}`}
        >
          {todo.text}
        </span>
      )}

      {todo.complete ? null : edited ? (
        <button className="todo-item-submit-btn" onClick={handleSubmit}>
          🤝
        </button>
      ) : (
        <button className="todo-item-edit-btn" onClick={handleEditChange}>
          ✏️
        </button>
      )}
      <button
        className="todo-item-delete-btn"
        onClick={() => handleDelete(todo.id)}
      >
        🗑️
      </button>
    </li>
  )
}

export default TodoItem
