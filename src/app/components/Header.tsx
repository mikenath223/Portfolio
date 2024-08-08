export default function Header() {
  return (
    <>
      <div className="clip-effect"></div>
      <header>
        <div className="ball">
          <p className="-mt-1">M</p>
          <br />
          <div className="toggle">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input id="checkbox" type="checkbox" />
                <div className="slider round"></div>
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
