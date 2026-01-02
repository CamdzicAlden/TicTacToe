import iconStyle from "../css/DarkLightIcon.module.css";
import { useTheme } from "../contexts/ThemeContext.jsx";

function DarkLightIcon() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={iconStyle.root}>
      <img
        src={theme === "dark" ? "/icons/SunEmpty.svg" : "/icons/MoonEmpty.svg"}
        alt="S"
        onClick={toggleTheme}
      />
    </div>
  );
}

export default DarkLightIcon;
