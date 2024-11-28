interface ILinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const Link = ({ children, href, className }: ILinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "px-4 py-2 rounded ml-4 shadow-md hover:!shadow-lg hover:!border-blue-100 transition-shadow duration-100"
      }
    >
      {children}
    </a>
  );
};
