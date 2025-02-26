import React from 'react';
import Heading from './heading';
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section>
        <Heading>Projects</Heading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <h2>{project.title}</h2>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}