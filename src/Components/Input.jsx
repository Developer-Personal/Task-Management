import { useContext } from "react"
import TaskContext from "../Context/Contextcreate"


const Input = () => {

    const {input, setInput, task, setTask} = useContext(TaskContext)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        setTask([...task, {id: task.length+1 , title: input , isChecked: false}])
        setInput("")
        //  console.log([...task, {id: task.length+1 , title: input , isChecked: false}])
    }

  return (
    <div className="input">
        <input type="text" placeholder='Enter the task..' value={input} onChange={handleChange} style={{padding:"5px"}}/> &nbsp;
        <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default Input