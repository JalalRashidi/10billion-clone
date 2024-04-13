import React from 'react'
import Hero from '../components/Hero'
import CourseCard from '../components/commons/CourseCard'

const Home = () => {
  return (
    <>
    <Hero/>
    <div className='flex items-center justify-center'>
        <h2 className='text-3xl font-semibold max-w-[800px] p-4 text-center mt-12'>Hi! I'm Balawal virk founder of 10 Billion Dollar Program
and a very successful freelancer.</h2>
    </div>
    <div className='max-w-[800px] text-center grid grid-cols-3 mx-auto mt-10'>
        <div>
            <h1 className='text-5xl text-cyan-400 font-extrabold'>5+</h1>
            <p>Years of Experience</p>
        </div>
        <div>
            <h1 className='text-5xl text-cyan-400 font-extrabold'>800+</h1>
            <p>Orders Delivered</p>
        </div>
        <div>
            <h1 className='text-5xl text-cyan-400 font-extrabold'>0</h1>
            <p>Profile link</p>
        </div>
        
    </div>
{/* course */}
<div className='bg-gray-200 p-8 my-8'>
<h1 className='text-5xl text-center font-extrabold'>Our Most Popular Online Courses</h1>

<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
<CourseCard title={'React Native'} name={'React Native Advance '} desc={"Become a master in React Native"}/>
<CourseCard title={'React Js'} name={'React Js Advance for Free'} desc={"Become a master in React Js"}/>
</div>
</div>

    </>
  )
}

export default Home