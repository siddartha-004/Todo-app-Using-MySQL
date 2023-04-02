import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button'
import {useForm} from 'react-hook-form'
import TodoList from '../TodoList/TodoList'
import {apiContext} from '../../contexts/TodosContextProvider'
import Completed from '../Completed/Completed'

import axios from 'axios'
import './Contents.css'
function Contents() {
  let {register,handleSubmit,formState:{errors}}=useForm();
  let [error,setError]=useState("")
  let [text,setText]=useState("")
  let [task,setTask,getTasks]=useContext(apiContext)
  let deleteTodos=()=>{
    
    axios.delete("http://localhost:3000/api/removeall")
  }
  let addNewTodo=(todo)=>{
    console.log(todo)
    axios.post("http://localhost:3000/api/post",todo)
    
    .then((response)=>{
      if(response.status===201)
      {
        console.log("added")
      }
      if(response.status!==201)
      {
        setError(response.data.message)
      }
      getTasks();
      

    })
    .catch((err)=>{
      if(err.response){
        setError(err.message);
      }
      else if(err.request)
      {
        setError(err.message)
      }
      else{
        setError(err.message)
      }
    })
  }
  return (
    <div className='container-8'>
      <div className='r1 fw-bold fs-5'>Today</div>
      <TodoList/>
      <div className='container-9'>
  
        <form onSubmit={handleSubmit(addNewTodo)}>
          <div className='main'>
        <input type="text" id="name"placeholder="Eg:Get the assignment done" className='form-control' {...register("name",{required:true})}/>
      <div  className='select1'>
     <select  id="category"
                className="form-select"
          
                {...register("category", { required: true })}>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
     </select>
     </div>
    
             
              {errors.category?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  Priority is required
                
                </p>
              )}
           
        {errors.name?.type==="required"&&<p className='text-danger'>*Task is Required</p>}
        </div>
        <div className='container-7'>
       <div>
        <Button variant="primary" className="btn contain2"type="submit">Add Task</Button>
        </div>
        </div>
        </form>
        <div>
        <Button variant="secondary" className="btn contain1" type='submit' onClick={()=>{deleteTodos()}}>Cancel</Button>
        </div>
        <div>
         
        </div>
      </div>
       <div className='co'>
        <Completed/>
       </div>
    </div>
  )
}

export default Contents