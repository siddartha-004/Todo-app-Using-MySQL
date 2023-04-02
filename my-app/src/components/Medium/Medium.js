import React,{useEffect,useState} from 'react'
import './Medium.css'
import axios from 'axios'
import {AiOutlineDown} from 'react-icons/ai'

import {MdRadioButtonUnchecked} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
function  Medium() {
  
    let [task4,setTask4]=useState([])
    let [error,setError]=useState("")
    let getTasks4=()=>{
       axios.get("http://localhost:3000/api/getmedium")
       .then((response)=>{
      
          console.log(response.data)
            setTask4(response.data)
            
        
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
        getTasks4();
    }, []);
    let [task7,setTask7]=useState([])
  
    let getTasks7=()=>{
       axios.get("http://localhost:3000/api/getmedium1")
       .then((response)=>{
      
          console.log(response.data)
            setTask7(response.data)
            
        
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
        getTasks7();
    }, []);
   
   
  return (
    <div className='container'>
        <div className='ab fw-bold'>
        Medium Priority<AiOutlineDown/>
        </div>
        <div className='row row-cols-1 '>
      {task4.map((todoobj)=>{
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
      {task7.map((todoobj)=>{
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

export default Medium