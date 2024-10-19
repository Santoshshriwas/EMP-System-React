import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form className='flex w-full  items-start justify-between flex-wrap'>
      <div className='w-1/2 '>
      <div>
      <h3 className='text-sm text-gray-200 mb-0.5'>Task Title</h3>
      <input type="text" className='text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="title" placeholder="Enter task title"/>
      </div>
      <div>
    <h3 className='text-sm text-gray-200 mb-0.5'>Task Date</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="date"/>
    </div>
    <div><h3 className='text-sm text-gray-200 mb-0.5'>Asign To</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Choose a Enp' /></div>
    <div><h3 className='text-sm text-gray-200 mb-0.5'>Categary</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev ,etc' /></div>
      </div>
    <div className='w-1/2 flex-col items-start'><h3 className='text-sm text-gray-200 mb-0.5'>Task Description</h3>
    <textarea className='text-sm py-1 px-2 h-44  w-4/5 rounded outline-none  bg-transparent border-[1px] border-gray-400 mb-4' name="description" placeholder="Enter task description"/></div>
    
    <button type="submit" className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
    
    </form>
  </div>
  )
}

export default CreateTask