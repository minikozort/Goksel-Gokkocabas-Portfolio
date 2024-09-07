import { Outlet } from 'react-router-dom';
import Nav from './components/NavBar';

export default function App() {
  return (
    <div>
        <Nav />
        <main>
        <Outlet />
      </main>
    </div>
  );
}
