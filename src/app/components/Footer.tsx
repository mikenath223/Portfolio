import { contactLinks } from "../../constants/projects.constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-feature-proj-bg-light dark:bg-feature-proj-bg-dark text-body-font-light dark:text-body-font-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg">
              Let&apos;s create something amazing together!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-500 hover:bg-blue-100 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm opacity-75">
            &copy; {currentYear} Michgolden Ukeje. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Full Stack Web Developer | UI-UX Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
