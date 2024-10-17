// Layouts
import DefautlLayout from "../../layouts/Default";
import PanelLayout from "../../layouts/Panel";

// Pages
import LoginPage from "../../pages/Auth/Login";
import HomePage from "../../pages/Home";

export const routes = [
  {
    layout: DefautlLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
        isPublic: true,
      },
    ],
  },
  {
    layout: PanelLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: HomePage,
        path: "/",
      },
      {
        name: "users",
        title: "Users",
        hasSiderLink: true,
        routes: [
          //   {
          //     name: 'list-users',
          //     title: 'List of users',
          //     hasSiderLink: true,
          //     component: ,
          //     path: '/users'
          //   },
          //   {
          //     name: 'create-user',
          //     title: 'Add user',
          //     hasSiderLink: true,
          //     component: CreateUser,
          //     path: '/users/new'
          //   }
        ],
      },
    ],
  },
];
