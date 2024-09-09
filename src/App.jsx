import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavBar'; 

export default function App() {
  return (
    <div>
      <NavTabs />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
