import React from 'react';
import ReactDOM from 'react-dom/client';  // Use React 18 root API
import SettingsPage from './components/settings-page';  // Your main Dashboard component



const initApp = () => {
  const appDiv = document.getElementById('watm-admin-root');  // Check for the root div

  if (appDiv) {
    const root = ReactDOM.createRoot(appDiv);  // Create a React root in the target div
    root.render(<SettingsPage />);  // Render the App component
  } else {
    console.error('Settings Page root element not found.');
  }
};

document.addEventListener('DOMContentLoaded', initApp);  // Ensure this runs after the DOM is fully loaded
