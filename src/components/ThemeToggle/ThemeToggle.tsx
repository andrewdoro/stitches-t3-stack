import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import { Toggle } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const mounted = useRef(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    mounted.current = true;
  }, []);

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  if (!mounted.current) return null;
  return (
    <Toggle onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Toggle>
  );
};

export default ThemeToggle;
