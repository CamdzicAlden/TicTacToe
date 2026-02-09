import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import TurnProvider from "./contexts/TurnContext.jsx";
import { HashRouter } from "react-router-dom";

const favicon = document.getElementById("favicon");
if (favicon) favicon.href = import.meta.env.BASE_URL + "icons/X.svg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <TurnProvider>
          <App />
        </TurnProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
);
