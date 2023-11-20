import { ReactComponent as Sun } from '../assets/Sun.svg';
import { ReactComponent as Moon } from '../assets/Moon.svg';
import '../styles/darkmode.scss';
import { useEffect } from 'react';

const toggleDarkMode = () => {
  if (document.documentElement.classList.contains('light')) {
    document.documentElement.classList.replace('light', 'dark');
    localStorage.setItem('darkMode', 'true');
  } else if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.replace('dark', 'light');
    localStorage.setItem('darkMode', 'false');
  };
};

const addDarkMode = () => {
  document.documentElement.classList.add('dark');
  const darkModeInput = document.getElementById('dark_mode_input') as HTMLInputElement;
  darkModeInput.checked = true;
}

const DarkMode = () => {
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode) {
      (darkMode === 'true') ? addDarkMode() : document.documentElement.classList.add('light');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) addDarkMode();
    else document.documentElement.classList.add('light');
  }, []);

  return (
    <div className="dark_mode">
      <input type="checkbox" id="dark_mode_input" className="dark_mode_input" />
      <label htmlFor="dark_mode_input" className='dark_mode_label' onClick={toggleDarkMode}>
        <Sun />
        <Moon />
      </label>
    </div>
  )
};

export default DarkMode;