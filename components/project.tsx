"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // Get the correct image based on theme
  const currentImage = typeof imageUrl === 'object' && 'light' in imageUrl ? imageUrl[theme] : imageUrl;

  return (
    <motion.div 
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0"> 
      <a href={githubUrl} target="_blank" rel="noopener">
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 hover:scale-105 transition-all sm:group-even:pl-10 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:sm:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 text-sm dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag) => (
                <li key={tag} className="bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">{tag}</li>
              ))}
            </ul>
          </div>

          <Image 
            src={currentImage}
            alt="Project"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 object-cover object-left-top w-[28.25rem] h-[18rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3 
            group-hover:translate-y-3 
            group-hover:-rotate-2 
            group-even:group-hover:translate-x-3
            group-even:group-hover:rotate-2
            group-even:-right-[initial] 
            group-even:-left-40"
          />
        </section>
      </a>
    </motion.div>
  );
}