import { useTheme } from "../contexts/ThemeContext";
import btnStyles from "../css/NavigationButton.module.css";

function NavigationButton({ content, className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
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
