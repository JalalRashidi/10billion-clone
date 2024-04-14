import React from 'react'
import CourseCard from '../components/commons/CourseCard'

const Course = () => {
  return (
    <>
    <div className='bg-gray-200 p-8 my-8 h-screen'>
<h1 className='text-5xl text-center font-extrabold'>Our Online Courses</h1>

<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
<CourseCard title={'React Native'} name={'React Native Advance '} desc={"Become a master in React Native"}/>
<CourseCard title={'React Js'} name={'React Js Advance for Free'} desc={"Become a master in React Js"}/>
</div>
</div>
    </>
  )
}

export default Course