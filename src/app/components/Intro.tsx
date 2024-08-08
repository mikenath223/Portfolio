const Intro = () => {
  return (
    <section className="intro items-center sm">
      <div className="intro-personal">
        <h3>I am</h3>
        <h1>Michgolden Ukeje</h1>
        <h2>
          a <span className="taught">self-taught</span> Full Stack Web Developer
        </h2>
        <h3>
          filled with an <span className="passion">undying passion</span> for
          creating <br />
          UI-UX integrated web solutions.
        </h3>
      </div>
      <div
        className={`skill before:-bottom-[75px] md:mt-0 mt-10 before:-left-[55px] 
          md:before:w-[400px] md:before:h-[400px]
          before:md:-left-[90px]
        before:w-[300px] before:h-[300px] 
        before:rounded-full`}
      >
        <h1>I speak</h1>
        <div className="skill-tab">
          <div className="skill-tab1">
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Nodejs</p>
            <p>Angular</p>
          </div>
          <div className="skill-tab2">
            <p>Rails</p>
            <p>Ruby</p>
            <p>React</p>
            <p>Redux</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
