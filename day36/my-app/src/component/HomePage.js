import React, { useContext } from 'react'
import Navbar from './Navbar'
import { ThemeContext } from './ThemeContext'
import './theme.css'

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme === 'light' ? 'light' : 'dark'}`}>
      <Navbar />
      <h2>{theme === 'light' ? 'Your theme is light' : 'Your theme is dark'}</h2>
    </div>
  );
};

export default HomePage;