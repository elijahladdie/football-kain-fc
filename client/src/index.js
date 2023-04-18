import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/form/login";
import Team from "./pages/Team";
import Match from "./pages/Match";
import Announcement from "./pages/Announcement";
import Projects from "./pages/Projects";
import Admin from "./pages/admin/Admin";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/team",
    element:<Team/>
  },{
    path:"/match",
    element:<Match/>
  },{
    path:"/announcements",
    element:<Announcement/>
  },{
    path:"/projects",
    element:<Projects/>
  },{
    path:"/admin/portal/login",
    element:<Login/>
  },{
    path:"/admin/app/dashboard",
    element:<Admin/>
  },{
    path:"*",
    element:<NotFound/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
