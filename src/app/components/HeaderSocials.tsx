import { headerSocials } from "@src/constants/projects.constants";
import Image from "next/image";
import { GithubSocial } from "./ui/GithubSocial";

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
          {index !== 0 ? (
            <Image src={src} alt={alt} width={30} height={30} />
          ) : (
            <GithubSocial isDarkMode={isDarkMode} alt={alt} />
          )}
        </a>
      ))}
    </>
  );
};
