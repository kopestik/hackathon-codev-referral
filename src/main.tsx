import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import "@fontsource-variable/inter";
import "./index.css";
import { UserContextProvider } from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </NextUIProvider>
  </StrictMode>
);
