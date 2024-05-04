import { useState } from 'react'
import styled from 'styled-components'
import { TodoList } from './Components/todo-list'
import { StartTodoList } from './data'

const Title = styled.h1`
   color:blue;
`

function App() {
  const [count, setCount] = useState(StartTodoList)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) =>!todo.isDone && new Date(todo.deadline) < today)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) =>!todo.isDone && new Date(todo.deadline) >= today)
  }

  const getCompleteTodos = () => {
    return todos.filter((todo) =>!todo.isDone)
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone}
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
   <div>
    <h1>Todo List</h1>
    <TodoList
    title='Overdue'
    items={getOverdueTodos()}
    onToggleTodo={toggleTodo}
    />
    <TodoList
    title='Actual'
    items={getActualTodos()}
    onToggleTodo={toggleTodo}
    />
    <TodoList
    title='Completed'
    items={getCompletedTodos()}
    onToggleTodo={toggleTodo}
    />
    <StartTodoList/>
   </div>
  )
}

export default App
