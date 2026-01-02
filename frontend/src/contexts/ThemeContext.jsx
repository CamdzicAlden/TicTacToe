import { createContext, useContext, useEffect, useState } from "react";

//Creating context
const ThemeContext = createContext();

//Function for using context in other files
export const useTheme = () => useContext(ThemeContext);

//Main ThemeProvider function
function ThemeProvider({ children }) {
  //Getting the default theme
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  //State for holding the theme
  const [theme, setTheme] = useState(getSystemTheme);

  //Change root element dataset every time theme changes
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  //Function for changing theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  //Object with values to be passed
  const value = {
    theme,
    toggleTheme,
  };

  return (
    //Wraping children inside ThemeContext
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
