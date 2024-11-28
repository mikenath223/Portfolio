import { headerSocials } from "@src/constants/projects.constants";
import Image from "next/image";

interface IHeaderSocials {
  isDarkMode: boolean;
}

export const HeaderSocials = ({ isDarkMode }: IHeaderSocials) => {
  return (
    <>
      {headerSocials.map(({ src, href, alt }, index) => (
        <a
          key={alt}
          href={href}
          className="soc-ball"
          rel="noopener"
          target="_blank"
        >
          <Image
            src={
              index === 0
                ? `/images/icons8-github-${isDarkMode ? "white" : "30"}.png`
                : src
            }
            alt={alt}
            width={30}
            height={30}
          />
        </a>
      ))}
    </>
  );
};
