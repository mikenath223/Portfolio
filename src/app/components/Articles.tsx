import Image from "next/image";

const Articles = () => {
  const articles = [
    {
      title: "A Firm Grasp on React-Redux Flow",
      date: "30th May 2020",
      image: "/images/react-connect.jpeg",
      link: "https://medium.com/weekly-webtips/a-firm-grasp-on-react-redux-flow-7cc8215d7815",
    },
    {
      title: "Rails Security: Eliminating CSRF and XSS vulnerabilities",
      date: "23rd Mar. 2020",
      image: "/images/ruby-on-rails-security-attacks.png",
      link: "https://medium.com/@michgoldennathan17/rails-security-eliminating-csrf-and-xss-vulnerabilities-5c815faf9c8a",
    },
    {
      title: "CSS Grid Vs Flexbox: A critique",
      date: "28th Nov. 2019",
      image: "/images/reponsive.gif",
      link: "https://hackernoon.com/css-grid-vs-flexbox-a-critique-dpr32ov",
    },
  ];

  return (
    <section className="articles mt-20 mb-40 bg-body-bg-light dark:bg-body-bg-dark mx-7 md:mx-20">
      <h1 className="text-3xl mb-20 text-center text-body-font-light dark:text-body-font-dark">
        Published Articles
      </h1>
      <div className="list-articles grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener"
            className="article-card group rounded-lg p-4 gap-3 flex flex-col items-center bg-feature-proj-bg-light dark:bg-feature-proj-bg-dark border-4 border-feature-proj-bg-light shadow-[inset_9px_9px_18px_var(--dark-highlight),_inset_-9px_-9px_18px_var(--soft-highlight)] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 hover:transform hover:scale-[1.02]"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="100%"
                className="transform group-hover:scale-105 transition-transform duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6 flex-grow relative w-full">
              <h2 className="text-xl font-bold mb-10 text-body-font-light dark:text-body-font-dark group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 absolute bottom-5 flex items-center">
                <span>Read article</span>
                <span className="ml-2 group-hover:ml-3 mb-1 transition-all duration-300">
                  →
                </span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
