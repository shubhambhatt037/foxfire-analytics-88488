import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/hero-animations.css";
import "./utils/hero-animations";

createRoot(document.getElementById("root")!).render(<App />);
