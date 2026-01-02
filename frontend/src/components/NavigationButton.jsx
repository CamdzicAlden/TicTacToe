import { useTheme } from "../contexts/ThemeContext";
import btnStyles from "../css/NavigationButton.module.css";

function NavigationButton({ content }) {
  //Getting the theme
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        //Contidionaly apply styles depending on theme
        className={`${btnStyles.root} ${
          theme === "dark" ? btnStyles.darkMode : btnStyles.lightMode
        }`}
      >
        {content}
      </button>
    </>
  );
}

export default NavigationButton;
