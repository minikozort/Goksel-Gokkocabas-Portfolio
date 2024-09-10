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
          <li className={currentPage === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link> {/* Link to the About page */}
          </li>
          <li className={currentPage === '/projects' ? 'active' : ''}>
            <Link to="/projects">Projects</Link> {/* Link to the Projects page */}
          </li>
          <li className={currentPage === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact me</Link> {/* Link to the Contact page */}
          </li>
          <li className={currentPage === '/resume' ? 'active' : ''}>
            <Link to="/resume">Resume</Link> {/* Link to the Resume page */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
