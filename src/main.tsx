import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  ActiveContextProvider,
  SearchContextProvider,
} from "./context/context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ActiveContextProvider>
   
      <BrowserRouter>
        <App />
      </BrowserRouter>
   
  </ActiveContextProvider>
);
