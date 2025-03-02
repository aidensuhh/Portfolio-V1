import React from 'react';
import Heading from './heading';
import { projectsData } from '@/lib/data';
import Project from './project';
export default function Projects() {
  return (
    <section>
        <Heading>Projects</Heading>
        <div className="mt-[3.25rem]">
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}