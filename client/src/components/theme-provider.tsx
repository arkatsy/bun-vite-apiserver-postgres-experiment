import { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function applyTheme(theme: Theme) {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

export function ThemeProvider({ children, defaultTheme = "light", storageKey = "vite-ui-theme", ...props }: ThemeProviderProps) {
  const [theme, _setTheme] = useState<Theme>(() => {
    const startingTheme = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    applyTheme(startingTheme);
    return startingTheme;
  });

  const setTheme = (theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    applyTheme(theme);
    _setTheme(theme);
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
