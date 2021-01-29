import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(props) {
  return <ListItem component="a" {...props} />;
}

export default function DrawerMenu(props) {
  const routes = props.routes;
  return (
    <List component="nav" aria-label="main mailbox folders">
      {routes.map((prop, key) => {
        if (prop.nav === true) {
          return (
            <ListItem button key={prop.key}>
              <ListItemLink href={prop.layout + prop.path}>
                <ListItemIcon>{<prop.icon />}</ListItemIcon>
                <ListItemText primary={prop.name} />
              </ListItemLink>
            </ListItem>
          );
        }
      })}
    </List>
  );
}
