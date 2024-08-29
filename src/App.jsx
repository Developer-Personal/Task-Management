import React, { useContext, useState } from 'react'
import Input from "./Components/Input"

import Progress from "./Components/Progress"
import Task from "./Components/Task"
import "./Style.css"
import Modals from './Components/Modals'
import TaskContext from './Context/Contextcreate'


function App() {

const {showModals} = useContext(TaskContext)

  return (
    <>
    <div className='app'>
     <Input/>
     <Task />
     <Progress/>
    </div>
      {showModals && <Modals/>}
      </>
  )
}

export default App
