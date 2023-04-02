import React,{useEffect,useState} from 'react'
import './Low.css'
import axios from 'axios'
import {AiOutlineDown} from 'react-icons/ai'

import {MdRadioButtonUnchecked} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
function  Low() {
  
    let [task3,setTask3]=useState([])
    let [error,setError]=useState("")
    let getTasks3=()=>{
       axios.get("http://localhost:3000/api/getlow")
       .then((response)=>{
      
          console.log(response.data)
            setTask3(response.data)
            
        
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
        getTasks3();
    }, []);
    let [task6,setTask6]=useState([])
  
    let getTasks6=()=>{
       axios.get("http://localhost:3000/api/getlow1")
       .then((response)=>{
      
          console.log(response.data)
            setTask6(response.data)
            
        
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
        getTasks6();
    }, []);
   
   
   
  return (
    <div className='container'>
        <div className='ab fw-bold'>
        Low Priority<AiOutlineDown/>
        </div>
        <div className='row row-cols-1 '>
      {task3.map((todoobj)=>{
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
      {task6.map((todoobj)=>{
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

export default Low