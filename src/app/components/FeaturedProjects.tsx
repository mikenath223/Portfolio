"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

const FeaturedProjects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Set up a MutationObserver to watch for changes to the classList
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(
      document.querySelector("html") ?? document.documentElement,
      {
        attributes: true,
        attributeFilter: ["class"],
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Bettercast Event Hosting",
      description:
        "Build the MVP product, and successfully onboarded the first set of users handling 2000+ capacity events at the first launch.",
      image: "/images/bettercast-mock.png",
      technologies: ["ReScript", "React", "TypeScript", "CSS", "JavaScript"],
      link: "https://conference.bettercast.io",
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
      link: "https://www.execfor.com/",
    },
    {
      title: "Facebook Clone",
      description:
        "A clone of the Facebook social media platform. It implements core features of Facebook such as friending, posting, commenting and liking.",
      image: "/images/facebrook-mockshot.png",
      technologies: ["Ruby on Rails", "HTML", "CSS", "JavaScript"],
      link: "https://brookapp.herokuapp.com/",
      sourceLink: "https://github.com/mikenath223/Project-Building-Facebook",
    },
    {
      title: "Trixxcare",
      description:
        "Built a health care delivery app built with the React and Redux frameworks coupled with a backend API built with Ruby on Rails. It showcases various caregivers and gives the opportunity for patients to book appoitments with a caregiver.",
      image: "/images/trixx.png",
      technologies: [
        "Rails",
        "Ruby",
        "React",
        "Redux",
        "React-Router",
        "HTML5-CSS3",
        "JavaScript",
      ],
      link: "https://trixxcare.netlify.app/",
      frontendSource: "https://github.com/mikenath223/trixxcare",
      backendSource: "https://github.com/mikenath223/trixxcare-api",
    },
    {
      title: "MunchIt",
      description:
        "Created a meals recipe app built with the React and Redux frameworks. It showcases meals accoring to their categories and each meal contains instructions on how to prepare also included is a Youtube video.",
      image: "/images/munch.png",
      technologies: [
        "React",
        "Redux",
        "React-Router",
        "CSS-Modules",
        "JavaScript",
      ],
      link: "https://muunchit.herokuapp.com/",
      sourceLink: "https://github.com/mikenath223/Cook-book-app",
    },
    {
      title: "Project Weather App",
      description:
        "Built a weather forecast app built with the openweather API with webpack. It also implements the GoogleMaps API to showcase locations.",
      image: "/images/weather-mock.png",
      technologies: [
        "OpenWeatherAPI",
        "GoogleMapsAPI",
        "GoogleTimeZoneAPI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      link: "https://mikenath223.github.io/Project-Weather-App/",
      sourceLink: "https://github.com/mikenath223/Project-Weather-App",
    },
    {
      title: "This Portfolio",
      description: "",
      image: "/images/portfolio-mock.png",
      technologies: ["HTML5", "CSS3(SCSS)", "JavaScript"],
      link: "https://michgolden.netlify.com/",
      sourceLink: "https://github.com/mikenath223/Portfolio",
    },
  ];

  return (
    <section
      id="feature-project"
      className="featured-project my-20 py-20 overflow-x-hidden bg-feature-proj-bg-light dark:bg-feature-proj-bg-dark px-20 2xl:px-10"
    >
      <div className="project-intro text-center">
        <h1 className="text-3xl mb-4 text-body-font-light dark:text-body-font-dark">
          Featured Projects
        </h1>
        <p className="text-body-font-light dark:text-body-font-dark">
          Here are a few of the projects I have worked on.
        </p>
      </div>
      <div className="feature-wrap grid lg:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-4 2xl:gap-2 max-w-[420px] lg:max-w-max">
        {projects.map((project, index) => (
          <figure
            key={index}
            className="feature-proj rounded-lg shadow-lg p-4 gap-3 flex flex-col md:flex-row items-center bg-feature-proj-bg-light dark:bg-feature-proj-bg-dark"
          >
            <div className="img-wrap flex items-center justify-center w-2/5">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="proj-img w-[160px] sm:h-[300px] h-[260px]"
              />
            </div>
            <figcaption className="main-project flex-grow py-3">
              <h3 className="text-xl text-center font-bold mb-2 text-proj-desc-light dark:text-proj-desc-dark">
                {project.title}
              </h3>
              <p className="proj-desc text-center proj-large text-proj-desc-light dark:text-proj-desc-dark">
                {project.description}
              </p>
              <div className="lang-stacks proj-large mt-4 flex items-center justify-center gap-3 flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 border-b border-sky-500 p-1 text-sm text-body-font-light dark:text-body-font-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="source-wrap mt-4 flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={project.link}
                  rel="noopener"
                  target="_blank"
                  className="bg-blue-500 px-4 py-2 rounded"
                >
                  <Image
                    src="/images/icons8-open.png"
                    alt="open"
                    width={20}
                    height={20}
                    className="inline mr-2"
                  />
                  View Page
                </a>
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    rel="noopener"
                    target="_blank"
                    className="bg-blue-500 px-4 py-2 rounded ml-4"
                  >
                    <Image
                      src={
                        isDarkMode
                          ? "/images/icons8-github-white.png"
                          : "/images/icons8-github-30.png"
                      }
                      alt="open"
                      width={20}
                      height={20}
                      className="inline mr-2"
                    />
                    Source Code
                  </a>
                )}
                {project.frontendSource && (
                  <a
                    href={project.frontendSource}
                    rel="noopener"
                    target="_blank"
                    className="bg-blue-500 px-4 py-2 rounded ml-4"
                  >
                    <Image
                      src={
                        isDarkMode
                          ? "/images/icons8-github-white.png"
                          : "/images/icons8-github-30.png"
                      }
                      alt="open"
                      width={20}
                      height={20}
                      className="inline mr-2"
                    />
                    Frontend Source
                  </a>
                )}
                {project.backendSource && (
                  <a
                    href={project.backendSource}
                    rel="noopener"
                    target="_blank"
                    className="bg-blue-500 px-4 py-2 rounded ml-4"
                  >
                    <Image
                      src={
                        isDarkMode
                          ? "/images/icons8-github-white.png"
                          : "/images/icons8-github-30.png"
                      }
                      alt="open"
                      width={20}
                      height={20}
                      className="inline mr-2"
                    />
                    Backend Source
                  </a>
                )}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
