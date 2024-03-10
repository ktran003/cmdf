import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home"
import Chatbot from "./Pages/Chatbot";

import Matching from "./Pages/Matching"
import LearningCorner from "./Pages/LearningCorner";
import Question1 from "./Pages/Question1";
import Profile from "./Pages/Profile";
import Multiplayer from "./Pages/Multiplayer";
import Finish from "./Pages/Finish";


import Login from "./Pages/Login";
import { PassageProvider } from '@passageidentity/passage-react';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/chatbot", element: <Chatbot /> },
  { path: "/learningcorner", element: <LearningCorner /> },
  { path: "/matching", element: <Matching /> },
  { path: "/quiz", element: <Question1 /> },
  { path: "/profile", element: <Profile/>},
  { path: "/multiplayer", element: <Multiplayer/>},
  { path: "/profile", element: <Profile /> },
  { path: "/finish", element: <Finish /> }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    {/* <Dashboard /> */}
    {/* <Chatbot /> */}
    {/* <LearningCorner /> */}


    <PassageProvider appId='tVgNjuNEpEwYaNeBqpnSQ17q'>
      <RouterProvider router={router} />
    </PassageProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
