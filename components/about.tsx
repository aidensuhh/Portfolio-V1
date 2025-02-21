import React from 'react';
import Heading from './heading';

export default function About() {
  return (
    <section className="font-medium mb-28 max-w-[35rem] text-center leading-8 sm:mb-40">
        <Heading>About Me</Heading>

        <p className="mb-3">
          At the age of 11, I left South Korea to study in Canada as an international student, often wondering, <span className="italic">What is my dream?</span> My mother envisioned me as a doctor, my father as a prosecutor—but my aspirations lay elsewhere.
        </p>

        <p className="mb-3">
          I was never the type to obsess over grades. What truly excited me was the process of learning—acquiring new skills, applying them creatively, and turning knowledge into real-world solutions. Over time, I realized that my passion wasn’t just about learning—it was about the freedom to use my skills anywhere, on my own terms. The idea of working from anywhere in the world with just a laptop became my driving force, shaping the path I’m on today.
        </p>

        <p className="mb-3">
          Outside of work and learning, I love staying active at the gym, playing volleyball, gaming, taking late-night walks, and meeting new people. If any of that resonates with you, feel free to <a href="#contact" className="underline font-bold">connect</a>—I’d love to chat!  
        </p>
    </section>
  )
}