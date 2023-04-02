import React,{useEffect,useState} from 'react'
import './High.css'
import axios from 'axios'
import {AiOutlineDown} from 'react-icons/ai'

import {MdRadioButtonUnchecked} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
function  High() {
  
    let [task2,setTask2]=useState([])
    let [error,setError]=useState("")
    let getTasks2=()=>{
       axios.get("http://localhost:3000/api/gethigh")
       .then((response)=>{
      
          console.log(response.data)
            setTask2(response.data)
            
        
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
        getTasks2();
    }, []);
    let [task5,setTask5]=useState([])
  
    let getTasks5=()=>{
       axios.get("http://localhost:3000/api/gethigh1")
       .then((response)=>{
      
          console.log(response.data)
            setTask5(response.data)
            
        
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
        getTasks5();
    }, []);
   
  

    
   
   
  return (
    <div className='container'>
        <div className='ab fw-bold'>
        High Priority<AiOutlineDown/>
        </div>
        <div className='row row-cols-1 '>
      {task2.map((todoobj)=>{
       return ( <div className='col'>
        <div className='icon'>
           <MdRadioButtonUnchecked  className='icon' />
          </div>
          <div className='card card-body'>
            <div className='name'>{todoobj.name}</div>
            <div className='category'><div className='obj'>{todoobj.category}</div><div className='ai'><AiFillCaretDown/></div></div>
          </div>
          
        
        </div>)
      })}
      </div>
      <div>
        
        <div className='row row-cols-1 '>
      {task5.map((todoobj)=>{
       return ( <div className='col'>
        <div className='icon'>
          < AiFillCheckCircle className='icon' />
          </div>
          <div className='card card-body'>
            <div className='name'>{todoobj.name}</div>
            <div className='category'><div className='obj'>{todoobj.category}</div><div className='ai'><AiFillCaretDown/></div></div>
          </div>
         
        
        </div>)
      })}
      </div>
        </div>
        </div>
  )
}

export default High