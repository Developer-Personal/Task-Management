import React, { useContext, useState } from 'react'
import Modals from './Modals'
import TaskContext from '../Context/Contextcreate'

const Task = () => {

    const {input, setInput, task, setTask, setShowModals, taskId, setTaskId} = useContext(TaskContext)

    const handleEdit = (id) => {
        const findTask = task.find(item => item.id === id)
        const filterTask = task.filter(item => item.id !== id)
        setInput(findTask.title)
        setTask(filterTask)
        
    }

    const handleDelete = (id) => {
        const filterTask = task.filter(item => item.id !== id)
        setTask(filterTask)
    }
    const handleCheckbox = (id) => {
        setTaskId(id)
        setShowModals(true)

        
        // console.log("data - ",updatedTask)
       

    }
  return (
    <>
    <div style={{marginTop:"20px"}}>
        {
            task.length ? task.map(item => (
                <div key={item.id} style={{backgroundColor:"yellow", display:"flex", justifyContent:"space-between", width:"50%", marginLeft:"25%", marginBottom:"10px", padding:"10px"}}>
                   <div style={{display:"flex", gap:"20px"}}>
                   <input type="checkbox" value={item.isChecked} checked={item.isChecked} onChange={() => handleCheckbox(item.id)} />
                   <span>{item.title}</span>
                   </div>
                    <div style={{display:"flex", gap:"20px"}}>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                    
                </div>
            )) : null
        }
    </div>
  
    </>
  )
}

export default Task