import React,{useState} from 'react'
import { Todoform } from './Todoform'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'
export const TodoWrapper = () => {
    const [todos,setTodos]=useState([])

    const addTodo=(todo)=>{
        setTodos([...todos,{id: uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get Things done!</h1>
        <Todoform addTodo={addTodo}/>
        {todos.map((todo,index) =>(
            <Todo task={todo} key={index}/>
        ))}
    </div>
  )
}
 