import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavBar'; 
import { useState } from 'react';


export default function App() {

  const [highlighted, setHighlighted] = useState(false)

  return (
    <div>
      <NavTabs highlighted={highlighted}/>
      <main>
        <Outlet context = {[highlighted, setHighlighted]}/>
      </main>
    </div>
  );
}
