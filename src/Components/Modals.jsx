import React, { useContext } from 'react'
import TaskContext from '../Context/Contextcreate'

const Modals = () => {

    const {setShowModals, task, setTask, taskId, setTaskId} = useContext(TaskContext)

    const handleOK = () => {
        const updatedTask = [...task]
        const index = updatedTask.findIndex(item => item.id == taskId)
       
        updatedTask[index].isChecked =  !updatedTask[index].isChecked
        setTask(updatedTask)
        setShowModals(false)
    }

    const handleCancel = () => {
        setShowModals(false)
    }
  return (
    <div className='background'>
        <div className='dialogue'>
            <h3 style={{textAlign:"right",paddingRight:"5px", cursor:"pointer"}} onClick={() => setShowModals(false)}>X</h3>
            <h2>Are you sure you want to update the status?</h2>
            <div style={{display:"flex", justifyContent:"end", gap:"10px", marginTop:"20px"}}>
                <button onClick={handleOK}>OK</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modals