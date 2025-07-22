import React, { createContext, useState } from 'react'
export const ThemeContextProvider=createContext()
const ThemeContext = ({children})=>{
const [theme,setTheme]=useState('dark')
const toggleTheme=()=>
{
    setTheme(theme ===  'light'?'dark':'light')
}

  return (
    <div>
        <ThemeContextProvider vlaue={{theme,toggleTheme}}>
        {children}
        </ThemeContextProvider>
      
    </div>
  )
}

export default ThemeContext
