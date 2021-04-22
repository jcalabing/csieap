import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ViewDialog(props) {
  const { children, triggerDialog, title, submitData } = props;
  const [open, setOpen] = React.useState(false);

  const handleCloseOpen = () => {
    setOpen(!open);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {triggerDialog(handleCloseOpen)}
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleCloseOpen}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers={false}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpen} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
