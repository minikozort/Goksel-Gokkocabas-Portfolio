import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation and useLocation for accessing the current URL path

function NavTabs(props) {
  // Get the current pathname from the location object
  const currentPage = useLocation().pathname;

  return (
    <header>
      {/* Main heading for the portfolio */}
      <h1>Goksel Gokkocabas's Portfolio</h1>
      
      {/* Navigation bar */}
      <nav id="navigation-bar-links" className={(props.highlighted ? 'highlight': '')}>
        <ul>
          {/* Navigation links */}
          <li>
            <Link to="/about">About</Link> {/* Link to the About page */}
          </li>
          <li>
            <Link to="/projects">Projects</Link> {/* Link to the Projects page */}
          </li>
          <li>
            <Link to="/contact">Contact me</Link> {/* Link to the Contact page */}
          </li>
          <li>
            <Link to="/resume">Resume</Link> {/* Link to the Resume page */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
