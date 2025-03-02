"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { skillsData } from '@/lib/data';

export default function Skills() {
    const {ref} = useSectionInView("Skills", 0.5);
  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-10">
            {skillsData.map((skill, index) => (
                <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3" key={index}>{skill}</li>
            ))}
        </ul>
    </section>
  )
}
