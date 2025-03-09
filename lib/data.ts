import React from "react";
import RBVeal from "@/public/RBVeal.png";
import Fitality from "@/public/Fitality.png";
import OutPerform from "@/public/OutPerform.jpg";
import EchoDoc from "@/public/EchoDoc.png";
import Portfolio from "@/public/Portfolio.png";
import Breakout from "@/public/Breakout.png";
import { AiOutlineLaptop, AiOutlineGlobal, AiTwotoneFileZip, AiOutlinePoweroff  } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Connect",
    hash: "#connect",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Associate",
    organization: "University of Waterloo FinTech Club",
    description:
      "Working on software projects with fellow associates to make a real impact in the financial technology world!",
    icon: React.createElement(AiOutlinePoweroff),
    date: "March 2025 - Present",
  },
  {
    title: "Web Developer",
    organization: "Electrium Mobility",
    description:
      "Building an Android app using Kotlin to seamlessly integrate Google Maps with eco-friendly electric cargo bikes, as well as contributing to the development of the organization's website using Typescript, React, and Tailwind CSS.",
    icon: React.createElement(AiOutlineGlobal),
    date: "January 2025 - Present",
  },
  {
    title: "Technology Coordinator",
    organization: "University of Waterloo Korean Student Association",
    description:
      "Developing the organization's web app using Python, Flask, and SQLite to manage membership registrations and provide member services for 200+ members.",
    icon: React.createElement(AiOutlineLaptop),
    date: "January 2025 - Present",
  },
  {
    title: "CxC Datathon Coordinator",
    organization: "University of Waterloo Data Science Club",
    description:
      "Organized 10+ sponsors to oversee key logistics of the ceremonies for Canada's largest Data Science hackathon, as well as delivering 7 workshops for 350+ participants, resulting in a 233% increase in workshop offerings compared to the previous year.",
    icon: React.createElement(AiTwotoneFileZip),
    date: "December 2024 - February 2025",
  },
] as const;

export const projectsData = [
  {
    title: "RBVeal",
    description:
      "A banking phishing simulator that sends a real email about a login attempt, leading students to the bank website, where an AI agent tries to scam them. Winner of UofTHacks 12 Tech@RBC Sponsor Prize.",
    tags: ["JavaScript", "React", "Next.js", "Express.js", "Tailwind CSS", "Twilio", "OpenAI API", "Websockets", "Deepgram", "Nodemailer"],
    imageUrl: RBVeal,
    githubUrl: "https://github.com/aidensuhh/RBveal",
  },
  {
    title: "Fitality",
    description:
      "A gamified AI-powered financial health tracker that helps university students assess and improve their financial habits. Currently working on training a financial advisor agent!",
    tags: ["Vue.js", "Flask", "PyTorch", "PostgreSQL", "Tailwind CSS", "Axios", "Python", "Google Gemini"],
    imageUrl: Fitality,
    githubUrl: "https://github.com/aidensuhh/Fitality",
  },
  {
    title: "EchoDoc",
    description:
      "An innovative healthcare technology platform that revolutionizes how family doctors deliver care through AI voice cloning for remote patient interactions.",
    tags: ["TypeScript", "Express.js", "Next.js", "React", "Tailwind CSS", "Supabase", "ElevenLabs", "Google Gemini", "Clerk", "Twilio"],
    imageUrl: EchoDoc,
    githubUrl: "https://github.com/aidensuhh/EchoDoc",
  },
  {
    title: "OutPerform",
    description:
      "A robo-advisor that selects an optimized portfolio of 12 stocks from a random list of tickers to surpass the market average between TSX 60 and S&P 500.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "yfinance"],
    imageUrl: OutPerform,
    githubUrl: "https://github.com/aidensuhh/OutPerform",
  },
  {
    title: "Personal Portfolio V1",
    description:
      "A static, responsive portfolio website built with modern front-end development tools to showcase projects & professional experience. Version 2 is currently under development for a more dynamic user experience!",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Three.js", "Framer Motion"],
    imageUrl: Portfolio,
    githubUrl: "https://github.com/aidensuhh/Portfolio-V1",
  },
  {
    title: "Breakout",
    description:
      "Simple JavaFX program that recreates a classic arcade game with enhanced experience delivered by customized modern features.",
    tags: ["Java", "JavaFX"],
    imageUrl: Breakout,
    githubUrl: "https://github.com/aidensuhh/Breakout",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "Java",
  "Python",
  "Flask",
  "Django",
  "PyTorch",
  "PostgreSQL",
  "Axios",
  "SQLite",
  "Nginx",
  "Supabase",
  "Kotlin",
  "NumPy",
  "pandas",
  "Matplotlib",
  "Racket",
  "Digital Ocean",
  "Figma",
  "Git",
  "GitHub",
  "Jupyter Notebook",
] as const;