"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const {ref} = useSectionInView("Contact", 0.5);

  return (
    <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration: 1
    }}
    viewport={{
      once: true
    }}
    >
        <SectionHeading>Contact</SectionHeading>
        <p className="text-gray-700 -mt-5">Please email me directly at <a href="mailto:aidenmsuh06@gmail.com" className="underline">aidenmsuh06@gmail.com</a> or through this form.</p>

        <form className="mt-8 flex flex-col" action={async (formData) => {
          const {error} = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return
          }
          toast.success("Email sent successfully!");
        }}>
          <input 
          className="h-14 rounded-lg borderBlack px-4" 
          name="senderEmail"
          type="email" 
          required
          maxLength={500}
          placeholder="Your email" />

          <textarea 
          className="h-52 my-3 rounded-lg borderBlack p-4" 
          name="message"
          required
          maxLength={5000}
          placeholder="Your message" />
          <div className="flex justify-center w-full mt-3">
            <SubmitBtn />
          </div>
        </form>
    </motion.section>
  )
}
