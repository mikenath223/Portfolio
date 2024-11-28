import Image from "next/image";

interface IGitHubSocialProps {
  isDarkMode: boolean;
  alt: string;
}

export const GithubSocial = ({ isDarkMode, alt }: IGitHubSocialProps) => {
  return isDarkMode ? (
    <Image
      src={"/images/icons8-github-white.png"}
      alt={alt}
      width={30}
      height={30}
    />
  ) : (
    <Image
      src={"/images/icons8-github-30.png"}
      alt={alt}
      width={30}
      height={30}
    />
  );
};
