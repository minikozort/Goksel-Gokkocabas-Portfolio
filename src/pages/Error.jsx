import { useRouteError } from 'react-router-dom';

/**
 * ErrorPage Component
 * Displays an error message when an unexpected error occurs.
 * Uses `useRouteError` hook from `react-router-dom` to capture and display error details.
 */
export default function ErrorPage() {
  // Retrieve error information from the `useRouteError` hook
  const error = useRouteError();
  
  // Log the error to the console for debugging purposes
  console.error(error);

  return (
    <div id="error-page">
      {/* Main heading for the error page */}
      <h1>Oops!</h1>
      
      {/* Informational message for the user */}
      <p>Sorry, an unexpected error has occurred.</p>
      
      {/* Display the specific error message or status text */}
      <p>
        {/* Display error details */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
