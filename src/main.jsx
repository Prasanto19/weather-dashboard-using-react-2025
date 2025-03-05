import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeatherDashBoardApp from "./WeatherDashBoardApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherDashBoardApp />
  </StrictMode>
);
