import React from "react";
import RBVeal from "@/public/RBVeal.png";
import Fitality from "@/public/Fitality.png";
import OutPerform from "@/public/OutPerform.jpg";
import EchoDoc from "@/public/EchoDoc.png";
import Breakout from "@/public/Breakout.png";
import Portfolio_L from "@/public/Portfolio_L.png";
import Portfolio_D from "@/public/Portfolio_D.png";
import { AiOutlineLaptop, AiOutlineGlobal, AiTwotoneFileZip, AiOutlinePoweroff, AiOutlineRobot } from "react-icons/ai";
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
    title: "AI Training Specialist",
    organization: "Scale AI",
    description:
      "Creating and answering computer science-related questions to train AI models, while evaluating and ranking AI-generated code for quality and accuracy.",
    icon: React.createElement(AiOutlineRobot),
    date: "March 2025 - Present",
  },
  {
    title: "Software Associate",
    organization: "University of Waterloo FinTech Club",
    description:
      "Engineering a decision support system that uses machine learning to recommend the most suitable fintech platform based on users' financial needs.",
    icon: React.createElement(AiOutlinePoweroff),
    date: "March 2025 - Present",
  },
  {
    title: "Web Developer",
    organization: "Electrium Mobility",
    description:
      "Built an Android app for electric bike users with Kotlin and developed the organization's website with TypeScript, React, and Tailwind CSS.",
    icon: React.createElement(AiOutlineGlobal),
    date: "January 2025 - Present",
  },
  {
    title: "Technology Coordinator",
    organization: "University of Waterloo Korean Student Association",
    description:
      "Developed a web application with Python, Flask, and SQLite and implemented a student-vendor verification system with JavaScript, HTML, and CSS.",
    icon: React.createElement(AiOutlineLaptop),
    date: "January 2025 - Present",
  },
  {
    title: "CxC Datathon Coordinator",
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
      "A responsive, dynamic portfolio built with modern front-end technologies featuring 3D animated backgrounds with automated email responses and form validation to showcase projects & experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Three.js", "Framer Motion"],
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
  "MySQL",
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