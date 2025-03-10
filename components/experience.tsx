"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';


export default function Experience() {
    const {ref} = useSectionInView("Experience", 0.5);
    const {theme} = useTheme();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>Experience</SectionHeading>
        <VerticalTimeline lineColor="">
          {
            experiencesData.map((experienceItem, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem"
                  }}
                  contentArrowStyle={{
                    borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
                  }}
                  date={experienceItem.date}
                  icon={experienceItem.icon}
                  iconStyle={{
                    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem"
                  }}
                >
                  <h3 className="font-semibold capitalize">{experienceItem.title}</h3>
                  <p className="font-normal !mt-0">{experienceItem.organization}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{experienceItem.description}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))
          }
        </VerticalTimeline>
    </section>
  )
}
