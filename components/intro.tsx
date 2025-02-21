"use client";

import Image from 'next/image';
import React from 'react';
import Profile from "@/public/PFP.jpg";
import { motion } from "framer-motion";
import Link from 'next/link';
import { HiDownload } from "react-icons/hi";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[35rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.4,
                }}>
                    <Image  src={Profile} 
                            alt='Aiden Suh'
                            width={192} // specify these so it knows the dimensions of the image that it has to preload
                            height={192}
                            quality={100} 
                            priority={true} // preload the image
                            className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ type: 'spring', stiffness: 70, duration: 0.2,}}>
                    <span className="absolute bottom-0 right-0 text-5xl">👋</span>
                </motion.div>
            </div>
        </div>

        <p className="mb-4 mt-8 px-4">
            <motion.span className="text-5xl font-bold flex justify-center"
            initial={{ opacity: 0, scale: 0, y: 100}}
            animate={{ opacity: 1, scale: 1, y: 0}}
            transition={{ duration: 0.4 }}>
                Hey! I'm Aiden!
            </motion.span>

            <motion.span className="block text-xl text-center py-4 w-50"
            initial={{ opacity: 0, scale: 0, y: 100}}
            animate={{ opacity: 1, scale: 1, y: 0}}
            transition={{ duration: 0.8 }}>
                I am a student at the <a className="underline font-bold" href="https://uwaterloo.ca/" target="_blank" rel="noopener">University of Waterloo</a>, double majoring in <span className="font-bold">Computer Science and Finance</span>, with a strong interest in full-stack development, machine learning, data analysis, and financial technology.
            </motion.span>
        </p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, scale: 0, y: 100}}
        animate={{ opacity: 1, scale: 1, y: 0}}
        transition={{ duration: 1}}>
            <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full font-bold outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all">Connect with me!</Link>

            <a className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full font-bold shadow-sm outline-none hover:scale-110 hover:bg-neutral-50 hover:text-black active:scale-105 transition-all cursor-pointer border border-black/10" href="/Resume.pdf" target="_blank" rel="noopener">Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>

            <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full font-bold shadow-sm outline-none hover:scale-110 hover:bg-neutral-50 hover:text-black active:scale-105 transition-all cursor-pointer border border-black/10" href="https://www.linkedin.com/in/aidensuhh/" target="_blank" rel="noopener">
                <BsLinkedin />
            </a>

            <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full font-bold shadow-sm text-[1.35rem] outline-none hover:scale-110 hover:bg-neutral-50 hover:text-black active:scale-105 transition-all cursor-pointer border border-black/10" href="https://github.com/aidensuhh" target="_blank" rel="noopener">
                <BsGithub />
            </a>
        </motion.div>
    </section>
  )
}