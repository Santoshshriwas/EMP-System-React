import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen justify-between gap-3 mt-10'>
      <div className='rounded-xl py-6 px-10 w-[30%] bg-red-400'>
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-white text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-10 w-[30%] bg-blue-400'>
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-white text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-10 w-[30%] bg-green-400'>
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-white text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-10 w-[30%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-white text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
