"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const {ref} = useSectionInView("About", 0.75);

    return (
      <section className="font-medium max-w-[35rem] text-center leading-8 scroll-mt-28" 
      id="about"
      ref={ref}
      > 
        <SectionHeading>About Me</SectionHeading>
          <p className="mb-4">
            At the age of 11, I left South Korea to study in Canada as an international student, often wondering, <span className="italic">&quot;What do I want to be in the future?&quot;</span> While my mother envisioned me as a dentist and my father as a prosecutor, deep down, I knew my aspirations lay elsewhere. 
          </p>
  
          <p className="mb-4">
            As a student, I merely viewed grades as a way to get into a good University, nothing more or less. What truly excited me, though, was the process of learning itself—the curiosity and discovery that came with it. Getting recommended on the most random topic on my YouTube feed, gaining interest in that topic as I watched, gradually learning about the subject on my own, and somehow using that knowledge in a real-life scenario—I was very nerdy and passionate about these kinds of thoughts.         
          </p>
  
          <p className="mb-4">
            As I explored my post-secondary choices in my final year of high school, the field of computer science stood out to me in particular. The freedom to use my skills anywhere, anytime—working on my own terms with just a laptop—really aligned with my future ideals. Coupled with my background in finance, this has set me on a path to make a meaningful impact and help create a better world.
          </p>
          <p>
            Outside of work and learning, I love staying active at the gym, reading fantasy/mystery fiction, playing volleyball, playing video games, taking late-night walks, and meeting new people. If any of that resonates with you, feel free to <a href="#connect" className="underline font-bold">connect</a>—I&apos;d love to chat!  
          </p>
      </section>
    )
  }