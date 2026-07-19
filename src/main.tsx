import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/feature/theme-provider.tsx";
import Navbar from "./components/layout/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-white dark:bg-[#0f0f0f]">
        <Navbar>
          <App />
        </Navbar>
      </div>
    </ThemeProvider>
  </StrictMode>,
);
