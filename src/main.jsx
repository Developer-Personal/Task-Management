import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TaskProvider from './Context/Contextprovide.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <TaskProvider>
    <App />
    </TaskProvider>
  </StrictMode>,
)
