import DashboardView from "./../views/DashboardView";
import Dashboard from "@material-ui/icons/Dashboard";
import ProfileView from "./../views/ProfileView";
import UserView from "./../views/UserView";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmployeesView from "./../views/EmployeesView/EmployeesView";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const adminRoute = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardView,
    layout: "/admin",
    key: "dashboard",
    nav: true,
  },
  {
    path: "/employees",
    name: "Employees",
    icon: PeopleIcon,
    component: EmployeesView,
    layout: "/admin",
    key: "employees",
    nav: true,
  },
  {
    path: "/user",
    name: "Users",
    icon: SupervisedUserCircleIcon,
    component: UserView,
    layout: "/admin",
    key: "user",
    nav: true,
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: AccountBoxIcon,
    component: ProfileView,
    layout: "/admin",
    key: "profile",
    nav: true,
  },

  {
    path: "/",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardView,
    layout: "/admin",
    key: "dashboard",
    nav: false,
  },
];

export default adminRoute;
