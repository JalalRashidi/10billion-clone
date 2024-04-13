import React from 'react'

const CourseCard = ({title,name,desc}) => {
  return (
    <div className='text-center rounded-md overflow-hidden'>
        <div className='h-52 bg-cyan-900 shadow-2xl flex items-center justify-center'>
          <h1 className='text-5xl text-white'>{title}</h1>
        </div>
        <div className='bg-white py-4'>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default CourseCard