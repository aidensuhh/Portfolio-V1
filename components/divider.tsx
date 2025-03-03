"use client";

import { motion } from 'framer-motion';
import React from 'react'

export default function Divider() {
  return (
    <motion.div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
    initial={{ opacity: 0, scale: 0, y: 100 }}
    animate={{ opacity: 1, scale: 1, y: 0}}
    transition={{ duration: 1.1}}>
    </motion.div> 
    )
}
