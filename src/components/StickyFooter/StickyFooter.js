import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stickyFooter: {
    backgroundColor: "#916b03",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "#fff",
  },
}));

export default function StickyFooter(props) {
  const classes = useStyles();

  return (
    <footer className={classes.stickyFooter}>
      <Container>
        <Typography variant="body1">PCAR6 Online Services</Typography>
        <Typography variant="body2">
          Philippine Coconut Authority Region 6
        </Typography>
      </Container>
    </footer>
  );
}
