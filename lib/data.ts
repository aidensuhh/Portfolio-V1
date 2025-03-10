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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Associate",
    organization: "University of Waterloo FinTech Club",
    description:
      "Collaborating with team members on software projects to contribute to innovative solutions within the financial technology sector.",
    icon: React.createElement(AiOutlinePoweroff),
    date: "March 2025 - Present",
  },
  {
    title: "Web Developer",
    organization: "Electrium Mobility",
    description:
      "Built a Kotlin Android app with Google Maps for E-Bike GPS navigation, engineered a Bluetooth Low Energy scanner for real-time communication across 40+ devices, and developed a responsive website with TypeScript, React, and Tailwind CSS for improved iOS UI and accessibility.",
    icon: React.createElement(AiOutlineGlobal),
    date: "January 2025 - Present",
  },
  {
    title: "Technology Coordinator",
    organization: "University of Waterloo Korean Student Association",
    description:
      "Developed a web application with Python, Flask, and SQLite to manage 200+ member registrations, and implemented a student-vendor verification system using JavaScript, HTML, and CSS to streamline authentication and offer discounts at 7+ local eateries through mobile-first web interfaces.",
    icon: React.createElement(AiOutlineLaptop),
    date: "January 2025 - Present",
  },
  {
    title: "CxC Datathon Coordinator",
    organization: "University of Waterloo Data Science Club",
    description:
      "Organized 10+ sponsors to oversee key logistics of the ceremonies for Canada's largest Data Science hackathon, as well as delivering 7 beginner-friendly workshops for 350+ participants, driving a 233% year-over-year increase in offerings.",
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
      "A gamified AI-powered financial health tracker that helps university students assess and improve their financial habits. Currently developing & training an AI-driven financial advisor agent.",
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
      "A robo-advisor that selects an optimized portfolio of 12 stocks from a random list of tickers to outperform TSX 60 and S&P 500 benchmarks.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "yfinance"],
    imageUrl: OutPerform,
    githubUrl: "https://github.com/aidensuhh/OutPerform",
  },
  {
    title: "Personal Portfolio V1",
    description:
      "A responsive, dynamic portfolio built with modern front-end technologies featuring 3D animated backgrounds with automated email responses and form validation to showcase projects & experience.",
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
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Kotlin",
  "Racket",
  "React",
  "Vue.js",
  "Node.js",
  "Next.js",
  "Express.js",
  "Three.js",
  "Tailwind CSS",
  "Flask",
  "PyTorch",
  "NumPy",
  "pandas",
  "Matplotlib",
  "PostgreSQL",
  "Supabase",
  "SQLite",
  "Nginx",
  "Git",
  "GitHub",
  "Docker",
  "DigitalOcean",
  "Figma",
] as const;