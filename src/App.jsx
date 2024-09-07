import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
