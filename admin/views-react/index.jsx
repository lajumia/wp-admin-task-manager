import React from 'react';
import ReactDOM from 'react-dom/client';  // Use React 18 root API
import Dashboard from './component/dashboard';  // Your main Dashboard component

console.log("React app loaded");

const initApp = () => {
  const appDiv = document.getElementById('watm-admin-root');  // Check for the root div

  if (appDiv) {
    const root = ReactDOM.createRoot(appDiv);  // Create a React root in the target div
    root.render(<Dashboard />);  // Render the App component
  } else {
    console.error('Dashboard root element not found.');
  }
};

document.addEventListener('DOMContentLoaded', initApp);  // Ensure this runs after the DOM is fully loaded
