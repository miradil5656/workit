import React from 'react'

interface Props{
    num:string
}

const Card = ({num}:Props) => {
  return (
    <div className="flex flex-col justify-between items-center   mx-auto gap-10 w-[500px]">
          <div className="p-6 border rounded-full w-[70px] h-[70px] flex justify-center items-center font-bold text-2xl" >{num}</div>
          <h1 className="text-4xl">Actionable insights</h1>
          <p className="text-center text-2xl leading-10 p-6">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
        </div>
  )
}

export default Card