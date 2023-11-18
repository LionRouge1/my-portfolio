import { ReactComponent as Sun } from '../assets/Sun.svg';
import { ReactComponent as Moon } from '../assets/Moon.svg';
import '../styles/darkmode.scss';
import { useEffect } from 'react';

const toggleDarkMode = () => {
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  };
}

const DarkMode = () => {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("dark");
      const dark_mode_input = document.getElementById('dark_mode_input') as HTMLInputElement;
      dark_mode_input.checked = true
    } else {
      document.documentElement.classList.add("light")
    }
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