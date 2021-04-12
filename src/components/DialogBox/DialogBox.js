import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import CancelIcon from "@material-ui/icons/Cancel";
import { amber } from "@material-ui/core/colors";
import SmallDialog from "./../SmallDialog/SmallDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    backgroundColor: amber,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox(props) {
  const { children, triggerDialog, title, submitData } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleCloseOpen = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
    // console.log("DialogBox");
    submitData(handleCloseOpen);
  };
  return (
    <div>
      {triggerDialog(handleCloseOpen)}
      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseOpen}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleCloseOpen}
              aria-label="close"
              color="secondary"
              className={classes.button}
            >
              <CancelIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button autoFocus color="inherit" onClick={() => handleSubmit()}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
}
