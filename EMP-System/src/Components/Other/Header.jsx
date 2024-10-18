import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Santosh</span> 👋</h1>
      <button className='text-white bg-red-600 text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
