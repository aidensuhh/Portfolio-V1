"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function Connect() {
  const {ref} = useSectionInView("Connect", 0.5);
  return (
    <section id="connect" ref={ref} className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>Connect</SectionHeading>
        <p className="text-gray-700 text-center">Will be updated soon! I need to study for my midterms first...</p>
    </section>
  )
}
