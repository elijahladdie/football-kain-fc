import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/form/login";
import Match from "./pages/Match";
import Announcement from "./pages/Announcement";
import Projects from "./pages/Projects";
import Admin from "./pages/admin/Admin";
import Adverseries from "./pages/admin/Adverseries";
import Matches from "./pages/admin/Matches";
import Referees from "./pages/admin/Referees";
import Logout from "./pages/form/Logout";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
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
    path:"/admin/portal/auth",
    element:<Login/>
  },{
    path:"/admin/app/dashboard",
    element:<Admin/>
  },{
    path:"/admin/app/dashboard/adversaries",
    element:<Adverseries/>
  },{
    path:"/admin/app/dashboard/matches",
    element:<Matches/>
  },{
    path:"/admin/app/dashboard/referees",
    element:<Referees/>
  },{
    path:"/admin/app/dashboard/logout",
    element:<Logout/>
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
