import styled from 'styled-components';
import { useState } from 'react'
import { TodoList } from './Components/todo-list'
import { startTodoList } from './data'
import { Theme } from "./styles/theme";


const Title = styled.h1`
  color:  ${({ theme }) => theme.colors.title}
`

function App() {
  const [todos, setTodos] = useState(startTodoList)  

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) < today)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) >= today)
  }

  const getCompletedTodos = () => {
    return todos.filter((todo) => todo.isDone)
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
    <Theme>
      <Title>Todo List</Title>
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
    </Theme>
  )
}

export default App;


