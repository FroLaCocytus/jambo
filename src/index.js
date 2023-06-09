import { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


export const Context = createContext(null);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Context.Provider>
    <App />
  </Context.Provider>
);