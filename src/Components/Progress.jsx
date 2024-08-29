import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../Context/Contextcreate'

const Progress = () => {

    const { task} = useContext(TaskContext)

    const [prog, setProg] = useState(0)



    useEffect(() => {
       if(task.length){
        const checkedtask = task.filter(item => item.isChecked).length
        const value = checkedtask/task.length*100
        setProg(value.toFixed(2))
       }

    },[task])
    return (
        <div className='progress'>
        

            <label htmlFor="file"> Progress:</label>
            <progress id="file" value={prog} max="100">  </progress>&nbsp;{prog}
        </div>
    )
}

export default Progress