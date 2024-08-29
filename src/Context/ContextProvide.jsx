import { useState } from "react";
import TaskContext from "./Contextcreate";

const TaskProvider = ({children}) => {

    const [input, setInput] = useState("")
    const [task, setTask] = useState([])
    const [showModals, setShowModals] = useState(false)
    const [taskId, setTaskId] = useState(null)

    const state = {
        input, setInput,
        task, setTask,
        showModals, setShowModals,
        taskId, setTaskId
    }

return (
<TaskContext.Provider value={state}>
    {children}
</TaskContext.Provider>
)

}
export default TaskProvider