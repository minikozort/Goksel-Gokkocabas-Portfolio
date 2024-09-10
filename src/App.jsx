import { Outlet } from 'react-router-dom'; // Import the Outlet component for rendering nested routes
import NavTabs from './components/NavBar'; // Import the NavTabs component for navigation
import { useState } from 'react'; // Import useState for managing state

export default function App() {

  // State to manage whether an element is highlighted
  const [highlighted, setHighlighted] = useState(false);

  return (
    <div>
      {/* Render the NavTabs component with the highlighted state */}
      <NavTabs highlighted={highlighted} />
      <main>
        {/* Render the Outlet component to display nested route components */}
        {/* Pass the highlighted state and its setter function as context */}
        <Outlet context={[highlighted, setHighlighted]} />
      </main>
    </div>
  );
}

