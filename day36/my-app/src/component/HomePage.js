import Navbar from './Navbar'
import React, { useContext } from 'react'
import { ThemeContextProvider } from './ThemeContext'
import './theme.css'

const HomePage = () => {
  const { theme } = useContext(ThemeContextProvider);
  return (
    <div className={`container ${theme=='light' ? 'light' : 'dark'}`}>
      <Navbar />
      <h2>{theme=='light' ? 'Your theme is light' : 'Your theme is light'}</h2>
    </div>
  );
};

export default HomePage;