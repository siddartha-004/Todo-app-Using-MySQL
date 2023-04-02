import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'
export let apiContext=createContext()

function TodosContextProvider({children}) {
    let [task,setTask]=useState([])
    let [error,setError]=useState("")
    //get
    let getTasks=()=>{
       axios.get("http://localhost:3000/api/get")
       .then((response)=>{
      
          console.log(response.data)
            setTask(response.data)
            
        
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
        getTasks();
    }, []);
    let [task1,setTask1]=useState([])
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
  return (
    <apiContext.Provider value={[task,setTask,task1,setTask1,getTasks,getTasks1]}>
        {children}
    </apiContext.Provider>
  )
}

export default TodosContextProvider