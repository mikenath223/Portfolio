import { LinkIcon } from "./ui/LinkIcon";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <>
      <LinkIcon href={"https://github.com/mikenath223"}>
        <FaGithub color="#0088d3" />
      </LinkIcon>
      <LinkIcon href={"https://www.linkedin.com/in/michgoldenukeje/"}>
        <FaLinkedin color="#0088d3" />
      </LinkIcon>
      <LinkIcon href={"https://www.linkedin.com/in/michgoldenukeje/"}>
        <FaTwitter color="#0088d3" />
      </LinkIcon>
    </>
  );
};
