import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES, type Theme } from '../data/themes';

interface ThemeContextType {
  currentTheme: Theme;
  setThemeId: (id: string) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<string>(() => {
    return localStorage.getItem('app-theme') || 'midnight-gold';
  });

  const currentTheme = THEMES[themeId] || THEMES['midnight-gold'];

  const setThemeId = (id: string) => {
    if (THEMES[id]) {
      setThemeIdState(id);
      localStorage.setItem('app-theme', id);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-bg', currentTheme.colors.bg);
    root.style.setProperty('--color-surface', currentTheme.colors.surface);
    root.style.setProperty('--color-border', currentTheme.colors.border);
    root.style.setProperty('--color-accent', currentTheme.colors.accent);
    root.style.setProperty('--color-accent-dim', currentTheme.colors.accentDim);
    root.style.setProperty('--color-text', currentTheme.colors.text);
    root.style.setProperty('--color-text-muted', currentTheme.colors.muted);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setThemeId,
        availableThemes: Object.values(THEMES),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
