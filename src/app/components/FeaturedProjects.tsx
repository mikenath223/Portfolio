"use client";

import { projects } from "@src/constants/projects.constants";
import Image from "next/image";
import { useState, useEffect } from "react";

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
            <figcaption className="main-project flex-grow py-3 self-start">
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
                {project.link && (
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
                )}
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
