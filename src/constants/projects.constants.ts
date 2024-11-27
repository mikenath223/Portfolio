import { Project } from "@src/interfaces/project.interface";

export const projects: Project[] = [
  {
    title:
      "Flashcards - AI tool to generate learning material from chosen study pdfs",
    description:
      "Flashcards is a tool to generate learning material from chosen study pdfs. The tool is built using Next.js, Tailwind CSS, and OpenAI API.",
    image: "/images/flashcards-mock.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "OpenAI API"],
    link: "https://flashcards.education/",
  },
  {
    title: "Peoplebox - OKR and Strategy Execution Platform for Enterprises",
    description:
      "Built the system to create and track OKRs that increased user signups by 200%. Updated the existing flow for objectives and goals analysis that reduced churn rate by 40%.",
    image: "/images/peoplebox-mock.png",
    technologies: ["React", "TypeScript", "Redux", "JavaScript"],
    link: "https://www.peoplebox.ai/",
  },
  {
    title: "Exec Business Executives Vacation Benefits",
    description:
      "EXEC is an all-in-one benefits solution designed to empower the modern leader—with exclusive travel and lifestyle benefits for individuals and organizations.",
    image: "/images/exec-mock.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "JavaScript",
      "Tailwind",
      "GraphQL",
    ],
    link: "https://www.joinexec.com/",
  },
  {
    title: "Bettercast Event Hosting",
    description:
      "Build the MVP product, and successfully onboarded the first set of users handling 2000+ capacity events at the first launch.",
    image: "/images/bettercast-mock.png",
    technologies: ["ReScript", "React", "TypeScript", "CSS", "JavaScript"],
    link: "https://conference.bettercast.io",
  },
  {
    title: "This Portfolio",
    description: "",
    image: "/images/portfolio-mock.png",
    technologies: ["HTML5", "CSS3(SCSS)", "JavaScript"],
    link: "https://michgolden.netlify.app/",
    sourceLink: "https://github.com/mikenath223/Portfolio",
  },
];
