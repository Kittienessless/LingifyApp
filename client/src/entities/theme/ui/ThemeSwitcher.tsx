import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ 
            backgroundColor: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', 
            padding: '20px' 
        }}>
            <h1>{`Current theme is ${theme}`}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeSwitcher;