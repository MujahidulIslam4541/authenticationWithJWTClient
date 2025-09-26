
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import router from "./route/Router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);