import React,{useState} from 'react'
import { Todoform } from './Todoform'

export const TodoWrapper = () => {
    const [todos,setTodos]=useState([])
  return (
    <div className='TodoWrapper'>
        <Todoform/>
    </div>
  )
}
