import React from 'react'
import {BsSun, BsMoon} from 'react-icons/bs'
export default function ThemeSwitch() {
  return (
    <button className='fixed bottom-5 right-5 bg-white border border-white shadow-2xl rounded-full w-[3rem] h-[3rem] flex items-center justify-center hover:bg-gray-100 transition-all bg-opacity-80 backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105'>
        <BsSun />
    </button>
  )
}
