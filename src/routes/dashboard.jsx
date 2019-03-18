import Dashboard from "views/Dashboard/Dashboard";
import home from "../Icons/home.png";

const dashboardRoutes = [
  {
    path: "/dashboard",
    icon: "home",
    name:"Jokes Galore",
    component: Dashboard
  },
  { redirect: true, path: "/", to: "/dashboard", name:"Jokes Galore"}
];

export default dashboardRoutes;
