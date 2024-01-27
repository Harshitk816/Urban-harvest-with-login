import React, { useState } from 'react'

const Contact = () => {
  const [showMessage,setShowMessage]=useState(false);

const handleClick=()=>{
  setShowMessage(true);
  setTimeout(()=>{
    setShowMessage(false);
  },2000);
}
  return (
    <div className='body border rounded-2xl w-[97%] m-auto drop-shadow-sm bg-[#eaf5ef]'>
      <h1 className='font-bold drop-shadow-md text-3xl p-4 m-4'>Contact us.</h1>

      <form className='drop-shadow-sm'>
        <div className='gap-4 grid grid-cols-2'>
          <input type="text" className='border shadow-inner col-span-1  p-2 mx-2 focus:outline-none px-4 text-sm rounded-2xl 2xs:max-md:px-2' placeholder='name' required></input>
          <input type="email" className='border shadow-inner col-span-2 p-2 mx-2 focus:outline-none px-4 text-sm rounded-2xl 2xs:max-md:px-2' placeholder='email' required></input>
          <input type="text" className='border shadow-inner col-span-3 p-2 mx-2 focus:outline-none px-4 text-sm rounded-2xl 2xs:max-md:px-2' placeholder='message' required></input>
        </div>  
        <div className='flex'>
          <button onSubmit={handleClick} onClick={handleClick} className='drop-shadow-2xl my-4 mx-3 px-4 text-white py-1 bg-[#4e7e6e] rounded-2xl'>Submit</button>
          {showMessage && <div className='drop-shadow-2xl my-4  px-4  text-white py-1 bg-[#f35050] rounded-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>}
        </div>  
        
      </form>
    </div>
  )
}

export default Contact