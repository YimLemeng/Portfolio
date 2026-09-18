import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useTheme() {
  // Default to 'dark' mode as standard for developers, but customizable
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
