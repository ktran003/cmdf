import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Contact from "./routes/Contact"
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home"
import Chatbot from "./Pages/Chatbot";
import Login from "./Pages/Login";
import { PassageProvider } from '@passageidentity/passage-react';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/contact", element: <Contact /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PassageProvider appId='tVgNjuNEpEwYaNeBqpnSQ17q'>
      <RouterProvider router={router} />
      {/* <Login />
    <Dashboard />
    <Chatbot /> */}
    </PassageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
