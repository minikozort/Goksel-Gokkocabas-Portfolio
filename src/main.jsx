import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering React components to the DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import routing utilities from react-router-dom

import App from './App'; // Import the main App component
import Error from './pages/Error'; // Import the Error page component for handling errors
import Home from './pages/Home'; // Import the Home page component
import Contact from './pages/Contact'; // Import the Contact page component
import Projects from './pages/Projects'; // Import the Projects page component
import Resume from './pages/Resume'; // Import the Resume page component

// Import CSS files for styling
import './assets/CSS/reset.css'; // CSS reset to standardize styles across browsers
import './assets/CSS/style.css'; // General styles for the application
import './assets/CSS/projects.css'; // Specific styles for the projects page

// Define the router with routes and components
const router = createBrowserRouter([
  {
    path: '/', // Base path for the application
    element: <App />, // Main component to render
    errorElement: <Error />, // Component to render in case of errors
    children: [
      {
        index: true, // Default route, renders Home component
        element: <Home />,
      },
      {
        path: '/about', // Path for the About page, renders Home component
        element: <Home />,
      },
      {
        path: '/projects', // Path for the Projects page, renders Projects component
        element: <Projects />,
      },
      {
        path: '/contact', // Path for the Contact page, renders Contact component
        element: <Contact />,
      },
      {
        path: '/resume', // Path for the Resume page, renders Resume component
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider with the defined router to manage routing in the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
