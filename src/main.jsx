import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/main.css";
import "./fonts/icon/style.css";
import "./fonts/roboto/Roboto-Regular.ttf";
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
// import './auth/index.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
