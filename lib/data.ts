import React from "react";
import RBVeal from "@/public/RBVeal.png";
import Fitality from "@/public/Fitality.png";
import OutPerform from "@/public/OutPerform.jpg";
import EchoDoc from "@/public/EchoDoc.png";
import Breakout from "@/public/Breakout.png";
import Portfolio_L from "@/public/Portfolio_L.png";
import Portfolio_D from "@/public/Portfolio_D.png";
import { AiOutlineLaptop, AiOutlineGlobal, AiTwotoneFileZip, AiOutlinePython, AiOutlineLogout } from "react-icons/ai";
import { StaticImageData } from "next/image";

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
    title: "Software Engineer",
    organization: "TEDxUW",
    description: 
      "Integrating an interactive event platform using modern web technologies and implementing key features including payment processing, authentication, and administrative tools.",
    icon: React.createElement(AiOutlineLogout),
    date: "April 2025 - Present",
  },
  {
    title: "Associate Software Developer",
    organization: "University of Waterloo FinTech Club",
    description:
      "Engineered a decision support system that uses machine learning to recommend the most suitable fintech platform based on users' financial needs.",
    icon: React.createElement(AiOutlinePython),
    date: "March 2025 - Present",
  },
  {
    title: "Software Developer",
    organization: "University of Waterloo Korean Student Association",
    description:
      "Developed a full-stack web app using Python, Flask, and SQLite and implemented a student-vendor verification system with JavaScript, HTML, and CSS for 200+ members.",
    icon: React.createElement(AiOutlineLaptop),
    date: "January 2025 - April 2025",
  },
  {
    title: "Web Developer",
    organization: "Electrium Mobility",
    description:
      "Built an Android app for electric bike users with Kotlin and developed the organization's website with TypeScript, React, and Tailwind CSS.",
    icon: React.createElement(AiOutlineGlobal),
    date: "January 2025 - March 2025",
  },
  {
    title: "CxC Data Hackathon Coordinator",
    organization: "University of Waterloo Data Science Club",
    description:
      "Oversaw key logistics for the ceremony procedures of Canada's largest Data Science hackathon and delivered beginner-friendly workshops for 350+ participants.",
    icon: React.createElement(AiTwotoneFileZip),
    date: "December 2024 - February 2025",
  },
] as const;

type ThemeImages = {
  light: StaticImageData;
  dark: StaticImageData;
};

export const projectsData = [
  {
    title: "RBVeal",
    description:
      "A banking phishing simulator that sends a real email about a login attempt, leading students to the bank website, where an AI agent tries to scam them. Winner of UofTHacks 12 Tech@RBC Sponsor Prize.",
    tags: ["JavaScript", "React", "Next.js", "Node.js","Express.js", "Tailwind CSS", "Twilio", "OpenAI API", "Websockets", "Deepgram"],
    imageUrl: RBVeal,
    githubUrl: "https://github.com/aidensuhh/RBveal",
  },
  {
    title: "EchoDoc",
    description:
      "An innovative healthcare technology platform that revolutionizes how family doctors deliver care through AI voice cloning for remote patient interactions.",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Supabase", "Twilio", "ElevenLabs", "Google Gemini"],
    imageUrl: EchoDoc,
    githubUrl: "https://github.com/aidensuhh/EchoDoc",
  },
  {
    title: "Fitality",
    description:
      "A gamified AI-powered financial health tracker that helps university students assess and improve their financial habits. Currently developing & training an AI-driven financial advisor agent.",
    tags: ["Vue.js", "Python", "Flask", "PyTorch", "PostgreSQL", "Tailwind CSS", "Axios", "Google Gemini"],
    imageUrl: Fitality,
    githubUrl: "https://github.com/aidensuhh/Fitality",
  },
  {
    title: "OutPerform",
    description:
      "A robo-advisor that selects an optimized portfolio of 12 stocks from a random list of tickers to outperform TSX 60 and S&P 500 benchmarks.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "yfinance", "Jupyter Notebook"],
    imageUrl: OutPerform,
    githubUrl: "https://github.com/aidensuhh/OutPerform",
  },
  {
    title: "Personal Portfolio V1",
    description:
      "A responsive, dynamic portfolio built with modern front-end technologies featuring 3D animated backgrounds with automated email responses and form validation to showcase projects & experience.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
    imageUrl: {
      light: Portfolio_D,
      dark: Portfolio_L
    } as ThemeImages,
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
  "SQL",
  "Kotlin",
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
  "Git",
  "GitHub",
  "VS Code",
  "Jupyter Notebook",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "SQLite",
  "Nginx",
  "Docker",
  "Figma",
] as const;