import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selected: {
    color: theme.palette.primary.main,
  },
}));

export default function DrawerMenu(props) {
  const { routes, pageTitle } = props;
  const classes = useStyles();
  return (
    <List>
      {routes.map((prop, key) => {
        if (prop.nav === true) {
          return (
            <ListItem
              button
              key={prop.key}
              component="a"
              href={prop.layout + prop.path}
            >
              <ListItemIcon>
                <prop.icon
                  className={pageTitle === prop.name ? classes.selected : ""}
                />
              </ListItemIcon>
              <ListItemText
                primary={prop.name}
                className={pageTitle === prop.name ? classes.selected : ""}
              />
            </ListItem>
          );
        }
      })}
    </List>
  );
}
