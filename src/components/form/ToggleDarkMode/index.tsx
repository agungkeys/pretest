import React, { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeDarkMode } from "@/redux/reducers/themeModeSlice";

export default function ToggleDarkMode() {
  const themeMode = useAppSelector((state) => state?.themeMode?.data || '');
  const dispatch = useAppDispatch();

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let valueThemeMode = themeMode === 'dark' ? true : false;
    setDarkMode(valueThemeMode);
    if(valueThemeMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  function handleToggle() {
    let valueTheme = themeMode !== 'dark' ? 'dark' : 'light';
    dispatch(changeDarkMode(valueTheme));
    localStorage.setItem('theme', valueTheme);
    setDarkMode(valueTheme === 'dark' ? true : false)
  }

  return (
    <div onClick={handleToggle}>
      {
        darkMode ?
        <BiSun size="20px" color='#49C0C6' /> :
        <BiMoon size="20px" color='#49C0C6' />
      }
    </div>
  )
}