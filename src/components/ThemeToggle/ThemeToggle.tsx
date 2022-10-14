import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Toggle } from './ThemeToggle.styles';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };
    if (!mounted) return null;
    return <Toggle onClick={toggleTheme}>{theme === 'light' ? <MoonIcon /> : <SunIcon />}</Toggle>;
};

export default ThemeToggle;
