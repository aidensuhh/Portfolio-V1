import React from "react";
import RBVeal from "@/public/RBVeal.png";
import Finilytics from "@/public/Finilytics.png";
import OutPerform from "@/public/OutPerform.png";
import EchoDoc from "@/public/EchoDoc.png";
import { AiOutlineLaptop, AiOutlineGlobal, AiTwotoneFileZip } from "react-icons/ai";

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
    title: "Web Developer",
    organization: "Electrium Mobility",
    description:
      "Building an Android app using Kotlin to seamlessly integrate Google Maps with eco-friendly electric cargo bike, as well as contributing to the development of the organization's website using Typescript, React, and Tailwind CSS.",
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
      "Organized 10+ sponsors to overee key logitstics of the ceremonies for Canada's largest Data Science hackathon, as well as delievering 7 workshops for 350+ participants, resulting in a 233% increase in workshop offerings compared to the previous year.",
    icon: React.createElement(AiTwotoneFileZip),
    date: "December 2024 - February 2025",
  },
] as const;

export const projectsData = [
  {
    title: "RBVeal",
    description:
      "A banking phishing simulator that sends a real email about a login attempt, leading students to the bank website, where an AI agent tries to scam them. Winner of UofTHacks 12 Tech@RBC Sponsor Prize.",
    tags: ["JavaScript", "React", "Next.js", "Express.js", "Tailwind CSS", "Twilio", "OpenAI API", "Websockets", "Deepgram"],
    imageUrl: RBVeal,
    githubUrl: "https://github.com/aidensuhh/RBveal",
  },
  {
    title: "Finilytics",
    description:
      "SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Plaid", "Dwolla", "React Hook Form", "Zod", "Tailwind CSS", "Chart.js"],
    imageUrl: Finilytics,
    githubUrl: "https://github.com/aidensuhh/Finilytics",
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
    tags: ["Python", "NumPy", "Pandas", "Matplotlib"],
    imageUrl: OutPerform,
    githubUrl: "https://github.com/aidensuhh/OutPerform",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Next.js",
  "Express.js",
  "Python",
  "Flask",
  "SQLite",
  "Kotlin",
  "Chart.js",
  "NumPy",
  "pandas",
  "Java",
  "C++",
  "Git",
  "GitHub",
  "Framer Motion",
] as const;