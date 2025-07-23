import React, { createContext, useState } from 'react'
export const ThemeContextProvider=createContext()
const ThemeContext = ({children})=>{
const [theme,setTheme]=useState('light')
const toggleTheme=()=>
{
    setTheme(theme ===  'light'?'dark':'light')
}

  return (
    
        <ThemeContextProvider vlaue={{theme,toggleTheme}}>
        {children}
        </ThemeContextProvider>
  )
}

export default ThemeContext
