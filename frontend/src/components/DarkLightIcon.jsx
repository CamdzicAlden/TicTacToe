import iconStyle from "../css/DarkLightIcon.module.css";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useState } from "react";

function DarkLightIcon() {
  const { theme, toggleTheme } = useTheme();
  const [hover, setHover] = useState(false);

  //Logic for setting image depending on theme and hover state
  const image =
    theme === "dark"
      ? hover
        ? import.meta.env.BASE_URL + "icons/SunFill.svg"
        : import.meta.env.BASE_URL + "icons/SunEmpty.svg"
      : hover
      ? import.meta.env.BASE_URL + "icons/MoonFill.svg"
      : import.meta.env.BASE_URL + "icons/MoonEmpty.svg";

  return (
    <div className={iconStyle.root}>
      <img
        src={image}
        alt="S"
        onClick={toggleTheme}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
}

export default DarkLightIcon;
