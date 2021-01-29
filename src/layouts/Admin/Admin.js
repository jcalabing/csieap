import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Adminbar from "../../components/Adminbar";
import Theme from "../../assets/Theme";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import routes from "../../routes/adminRoute.js";
import { createBrowserHistory } from "history";

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
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </Router>
);

export default function Admin({ ...rest }) {
  return (
    <ThemeProvider theme={Theme}>
      <Adminbar theme={Theme} routes={routes}>
        {switchRoutes}
      </Adminbar>
    </ThemeProvider>
  );
}
