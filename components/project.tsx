"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";

type ProjectProps = typeof projectsData[number];

export default function Project({title, description, tags, imageUrl, githubUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll( {
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
        
    return (
        <motion.div 
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}
        className="group sm:mb-8 last:mb-0"> 
            <a href={githubUrl} target="_blank" rel="noopener">
                <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 hover:bg-gray-200 hover:shadow-md hover:scale-105 transition-all group-even:pl-10 rounded-lg">
                        
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-sm mt-2 leading-relaxed text-gray-700">{description}</p>
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag) => (
                                <li key={tag} className="bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full">{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <Image src={imageUrl} alt="Project" quality={100} className="absolute top-8 -right-40 w-[30rem] h-[20rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 transition group-hover:-translate-y-3 group-hover:-rotate-3 group-hover:-translate-x-3 group-hover:scale-[1.02] group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-3 group-even:group-hover:translate-x-3" />
                </section>
            </a>
        </motion.div>
        
    )
}