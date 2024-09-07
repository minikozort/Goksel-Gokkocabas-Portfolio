import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header>
        <h1>Goksel Gokkocabas's Portfolio</h1>
        <nav id="navigation-bar-links">
          <ul>
            <li><Link to="/About">About me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/Contact">Contact me</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

  