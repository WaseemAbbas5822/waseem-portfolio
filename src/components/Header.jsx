import Icon from "./Icon.jsx";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header>
      <div className="wrap">
        <nav aria-label="Main">
          <div className="links">
            <a href="#projects">Projects</a>
            <a className="hide-m" href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a className="hide-m" href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <button id="theme" type="button" onClick={onToggleTheme} aria-label="Switch light or dark theme">
              <Icon name={theme === "dark" ? "sun" : "moon"} size={16} /> Theme
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}