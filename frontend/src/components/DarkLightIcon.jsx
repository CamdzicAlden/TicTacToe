import iconStyle from "../css/DarkLightIcon.module.css";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useEffect, useState } from "react";

function DarkLightIcon() {
  const { theme, toggleTheme } = useTheme();
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState(" ");

  useEffect(() => {
    setImage(
      theme === "dark"
        ? hover
          ? "/icons/SunFill.svg"
          : "/icons/SunEmpty.svg"
        : hover
        ? "/icons/MoonFill.svg"
        : "/icons/MoonEmpty.svg"
    );
  }, [hover, theme]);

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
