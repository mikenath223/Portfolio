"use client";

import Image from "next/image";
import useDarkMode from "../hooks/useDarkMode";
import useSocials from "../hooks/useSocials";
import { HeaderSocials } from "./HeaderSocials";

export default function Header() {
  const { isDarkMode, toggleDarkMode, applyDarkMode } = useDarkMode();
  const { handleBallAnimation, isBallExpanded } = useSocials(applyDarkMode);

  const onChangeDarkMode = () => {
    toggleDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="clip-effect"></div>
      <header>
        <div
          ref={handleBallAnimation}
          className={!isBallExpanded ? "ball" : "expand"}
        >
          <p className="-mt-1 flex items-center gap-2 justify-center">
            {!isBallExpanded ? "M" : <HeaderSocials isDarkMode={isDarkMode} />}
          </p>
          <br />
          <div className="toggle">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={onChangeDarkMode}
                />
                <div className="slider round">
                  <div className="slider-toggle flex justify-center items-center absolute">
                    {isDarkMode ? (
                      <Image
                        src={"/images/night.png"}
                        alt="..."
                        fill
                        sizes="100%"
                      />
                    ) : (
                      <Image
                        src={"/images/sun.png"}
                        alt="..."
                        fill
                        sizes="100%"
                      />
                    )}
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <div className="line">
              <li>
                <a href="#feature-project">Projects</a>
              </li>
              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>
            </div>
            <div className="line">
              <li>
                <a href="#contact">Contact</a>
              </li>
              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
