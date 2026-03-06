import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { ConfigProvider } from "./context/configContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
);
