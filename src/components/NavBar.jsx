import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header>
    <h1>Goksel Gokkocabas's Portfolio</h1>
    <nav id="navigation-bar-links">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  </header>
  );
}

export default NavTabs;
