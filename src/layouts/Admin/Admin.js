import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Theme from "../../assets/Theme";
import { Switch, Route, Router, Redirect, useLocation } from "react-router-dom";
import routes from "../../routes/adminRoute.js";
import { createBrowserHistory } from "history";
import ResponsiveDrawer from "./../../components/ResponsiveDrawer";

const hist = createBrowserHistory();
const switchRoutes = (
  <Router history={hist}>
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
              name={prop.name}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </Router>
);

function HeaderView() {
  let x;
  let y;
  const location = useLocation();
  routes.find((prop) => {
    if (prop.layout + prop.path === location.pathname) {
      x = prop.name;
    }
    y = prop.name;
  });
  return x ? x : y;
}

export default function Admin() {
  return (
    <ThemeProvider theme={Theme}>
      <ResponsiveDrawer theme={Theme} routes={routes} pageTitle={HeaderView()}>
        {switchRoutes}
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}
