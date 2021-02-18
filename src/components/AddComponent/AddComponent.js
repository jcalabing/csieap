import React from "react";
import { IconButton, Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

class AddComponent extends React.Component {
  state = {
    numChildren: 1,
  };

  render() {
    const children = [];
    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.unshift(<this.props.children key={i} />);
    }

    return (
      <ParentComponent addChild={this.onAddChild}>{children}</ParentComponent>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1,
    });
  };
}

const ParentComponent = (props) => (
  <Grid container>
    <Grid xs={12} sm={1} md={1} style={{ margin: "auto", textAlign: "center" }}>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={props.addChild}
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </Grid>
    <Grid xs={12} sm={11} md={11}>
      {props.children}
    </Grid>
  </Grid>
);

export default AddComponent;
