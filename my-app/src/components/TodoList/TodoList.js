import React,{useState,useEffect,useContext} from 'react'
import {apiContext} from '../../contexts/TodosContextProvider'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import {MdRadioButtonUnchecked} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import './TodoList.css'
import axios from 'axios'

function TodoList() {
   let [task,setTask,getTasks]=useContext(apiContext)
   let [err,setError]=useState("")
   let completeTodo=(todo)=>{

    axios.post("http://localhost:3000/api/going",todo)
    deleteTodo(todo.name)
    
  }
    let deleteTodo =(name) =>{
      
      axios.delete(`http://localhost:3000/api/remove/${name}`)
    
    
      
    }
  return (
    <div>
      <div className='row row-cols-1 '>
      {task.map((todoobj)=>{
       return ( <div className='col'>
        <div className='icon'>
          <MdRadioButtonUnchecked className='icon' onClick={()=>{completeTodo(todoobj)}}/>
          </div>
          <div className='card card-body'>
            <div className='name'>{todoobj.name}</div>
            <div className='category'><div className='personal'>Personal</div><div className='obj'>{todoobj.category}</div><div className='ai'><AiFillCaretDown/></div></div>
          </div>
          <RiDeleteBin6Line className='icon' onClick={()=>{deleteTodo(todoobj.name)}}/>
          <FiMoreVertical className='icon'/>
        
        </div>)
      })}
      </div>
       
    </div>
  )
}

export default TodoList