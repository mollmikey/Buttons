import { useState } from 'react';
import './App.css';
import Glow from './buttons/Glow';

function App() {
const [isDarkMode, setIsDarkMode] = useState(false); // State to track the mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle between light and dark mode
  };
  return (
    <>
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <button className="toggle-button" onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <Glow />
            </div>
    </>
  );
}

export default App;
