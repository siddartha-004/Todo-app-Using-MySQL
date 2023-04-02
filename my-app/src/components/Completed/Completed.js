import React,{useEffect,useState,useContext} from 'react'
import './Completed.css'
import axios from 'axios'
import {AiOutlineDown} from 'react-icons/ai'
import { apiContext } from '../../contexts/TodosContextProvider'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import {MdRadioButtonUnchecked} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
function Completed() {
  
    let [task1,setTask1]=useState([])
    let [error,setError]=useState("")
    let getTasks1=()=>{
       axios.get("http://localhost:3000/api/getting")
       .then((response)=>{
      
          console.log(response.data)
            setTask1(response.data)
            
        
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
       }
       )
    }
    useEffect(()=>{
        getTasks1();
    }, []);
   
    let deleteTodo1 =(name) =>{
      
        axios.delete(`http://localhost:3000/api/removing/${name}`)
      
      
        
      }
      let incompleteTodo=(todo)=>{

        axios.post("http://localhost:3000/api/goingn",todo)
        deleteTodo1(todo.name)
        
      }
  return (
    <div>
        <div className='ab'>
        Completed<AiOutlineDown/>
        </div>
        <div className='row row-cols-1 '>
      {task1.map((todoobj)=>{
       return ( <div className='col'>
        <div className='icon'>
          < AiFillCheckCircle className='icon' onClick={()=>{incompleteTodo(todoobj)}}/>
          </div>
          <div className='card card-body'>
            <div className='name'>{todoobj.name}</div>
            <div className='category'><div className='obj'>{todoobj.category}</div><div className='ai'><AiFillCaretDown/></div></div>
          </div>
          <RiDeleteBin6Line className='icon' onClick={()=>{deleteTodo1(todoobj.name)}}/>
          <FiMoreVertical className='icon'/>
        
        </div>)
      })}
      </div>
        </div>
  )
}

export default Completed