import React, {useState} from 'react'

const TodoList = () => {
    const [todos,setTodos] = useState(["isle","oxu","podroci"]);  
    const [newTodo,setNewtodo] = useState("")

    const addTodo = () => {  
        setTodos([...todos,newTodo]);
        setNewtodo("")
    };

  return (
    <div className='tdl'>
        <input type="text" 
     placeholder='new tasks'value={newTodo} 
     onChange={(e) => setNewtodo(e.target.value)}     />
     <button onClick={addTodo}>add todo</button>
      <ul>
        {
            todos.map((todo,index) => {
                return <li key={index}>{todo}</li>
            })
        }
    </ul>
     
    </div>
  )
}

export default TodoList;    
