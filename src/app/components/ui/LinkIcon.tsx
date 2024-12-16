interface ILinkProps {
  children: React.ReactNode;
  href: string;
}

export const LinkIcon = ({ children, href }: ILinkProps) => {
  return (
    <a href={href} className="soc-ball" rel="noopener" target="_blank">
      {children}
    </a>
  );
};
