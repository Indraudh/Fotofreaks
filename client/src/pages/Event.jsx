import React from 'react'
import { CarouselWithContent } from '.components/Crausel';

function Events() {
    
  return (
    <div className='w-full pb-10'>
        <div className=' flex flex-col items-center  justify-center font-semibold py-8 '>
            <h1 className=' text-slate-600 text-lg sm:text-3xl'>Events</h1>
            <div className=' mt-2 w-1/4 h-[2px] rounden-lg opacity-[30%] bg-green-500 '></div>
        </div>
        <CarouselWithContent />
    </div>
  )
}

export default Events;
