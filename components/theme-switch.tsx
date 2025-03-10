'use client';

import React from 'react'
import {BsSun, BsMoon} from 'react-icons/bs'
import { useTheme } from '@/context/theme-context';

export default function ThemeSwitch() {
    const {theme, toggleTheme} = useTheme();

  return (
    <button className='fixed bottom-5 right-5 bg-white border border-black shadow-2xl rounded-full w-[3rem] h-[3rem] flex items-center justify-center hover:bg-gray-100 transition-all bg-opacity-80 backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105 dark:bg-gray-950 dark:border-white'
    onClick={toggleTheme}
    >
        {theme === "light" ? (
            <BsSun />
        ) : (
            <BsMoon />
        )}
    </button>
  )
}
