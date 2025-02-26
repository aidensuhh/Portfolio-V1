import RBVeal from "@/public/RBVeal.png";
import OutPerform from "@/public/OutPerform.png";
import Placeholder from "@/public/Placeholder.png";

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
//  { // add when i get a job :)
//    name: "Experience",
//    hash: "#experience",
//  },
  {
    name: "Connect",
    hash: "#connect",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Job Title 1",
//     location: "N/A",
//     description:
//       "N/A.",
//     icon: React.createElement(LuGraduationCap),
//     date: "N/A",
//   },
// ] as const;

export const projectsData = [
  {
    title: "RBVeal",
    description:
      "A banking phishing simulator leveraging AI call agent to trick students into transferring money. Winner of UofTHakcs 12 Tech@RBC Sponsor Prize.",
    tags: ["React", "Next.js", "Express.js", "Tailwind CSS", "Twilio", "OpenAI API", "Deepgram", "Websockets"],
    imageUrl: RBVeal,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: OutPerform,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Placeholder,
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
  "NumPy",
  "pandas",
  "Java",
  "C++",
  "Git",
  "GitHub",
  "Framer Motion",
] as const;