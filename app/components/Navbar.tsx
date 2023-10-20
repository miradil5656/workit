import React from 'react'

const Navbar = () => {
  return (
    <div className='py-10 px-8  h-[700px] text-white'>
        <div className='flex justify-between items-center container  mx-auto'>
            <h1 className='text-5xl font-extrabold'>work<span className='font-normal'>it</span></h1>
            <h2 className='text-3xl font-normal border-b-lime-400 border-b-4 p-2'>Apply for access</h2>
        </div>
        <div className='mt-[100px]'>
            <h1 className='text-7xl font-extrabold text-center'>Data tailored to your needs.</h1>
        </div>

        <div className='flex justify-center mt-[50px] '>
            <button className="btn btn-accent font-extrabold text-xl h-[70px] p-4 w-[200px]">Learn more</button>
        </div>
    </div>
  )
}

export default Navbar