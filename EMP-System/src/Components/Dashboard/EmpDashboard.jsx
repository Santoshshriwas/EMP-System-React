import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmpDashboard = () => {
  return (
   
      <div className='p-16 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskListNumber/>
      <Tasklist/>
      </div>
   
  )
}

export default EmpDashboard
