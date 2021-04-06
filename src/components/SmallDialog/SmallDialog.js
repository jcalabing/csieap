import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function SmallDialog(props) {
  const { title, body, smallDialogState, setSmallDialogState } = props;
  // const [open, setOpen] = React.useState(smallDialogState);
  const handleClickOpen = () => {
    // setOpen(smallDialogState);
    setSmallDialogState(true);
  };

  const handleClose = () => {
    // setOpen(false);
    setSmallDialogState(false);
  };

  console.log(smallDialogState);
  console.log("Small Dialog");
  return (
    <div>
      <Dialog
        open={smallDialogState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Got It
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
