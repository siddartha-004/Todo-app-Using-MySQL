import React,{useContext} from 'react'
import './AddTodo.css'
import {apiContext} from '../../contexts/TodosContextProvider'
import {AiFillCaretDown} from 'react-icons/ai'
import {MdRadioButtonUnchecked} from 'react-icons/md'
import {AiOutlineDown} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
function AddTodo() {
  let [task,setTask,task1]=useContext(apiContext)
  return (
    <div className='container'>
      <div className='ab fw-bold'>
        All Tasks<AiOutlineDown/>
        </div>
      
         <div>
      <div className='row row-cols-1 '>
      {task.map((todoobj)=>{
       return ( <div className='col'>
           <div className='icon'>
          <MdRadioButtonUnchecked className='icon'/>
          </div>
          <div className='card card-body'>
            <div className='name'>{todoobj.name}</div>
            <div className='category'><div className='personal'>Personal</div><div className='obj'>{todoobj.category}</div><div className='ai'><AiFillCaretDown/></div></div>
          </div>
      
        
        </div>)
      })}
      </div>
       
    </div>
    <div>
        
        <div className='row row-cols-1 '>
      {task1.map((todoobj)=>{
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

export default AddTodo