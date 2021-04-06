import React from "react";
import { IconButton, Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { FieldDivider } from "./../FormField/FormField";
import Typography from "@material-ui/core/Typography";

class NewAddComponent extends React.Component {
  state = {
    childData: [],
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({
        childData: this.props.value,
      });
    }
  }

  render() {
    var reverseList = [];
    this.state.childData.forEach((element, index) => {
      reverseList.unshift(this.generateChildGroup(index, element));
    });
    return (
      <ParentComponent addChild={this.onAddChild} title={this.props.title}>
        {reverseList}
      </ParentComponent>
    );
  }

  generateChildGroup = (index, oldData) => {
    var newChildData = this.state.childData;
    if (oldData) {
      newChildData = oldData;
    }
    return (
      <this.props.children
        key={index}
        index={index}
        childData={newChildData}
        insertData={this.insertData}
        onRemoveChild={this.onRemoveChild}
      />
    );
  };

  onAddChild = () => {
    var newChildData = this.state.childData;
    newChildData.push({});
    this.setState({
      childData: newChildData,
    });
  };

  onRemoveChild = (index) => {
    var newChildData = this.state.childData;
    delete newChildData[index];
    this.setState({
      childData: newChildData,
    });
    this.saveData();
  };

  saveData = () => {
    this.props.onSave(this.props.dataKey, this.state.childData);
  };

  insertData = (index, key, value) => {
    var newChildData = this.state.childData;
    newChildData[index][key] = value;
    this.setState({
      childData: newChildData,
    });
    this.saveData();
  };
}

const ParentComponent = (props) => (
  <Grid container>
    <Grid
      xs={12}
      sm={12}
      md={12}
      style={{ margin: "auto", justifyContent: "center" }}
    >
      <Typography component="h6" variant="h6">
        {props.title}
        <IconButton color="primary" component="span" onClick={props.addChild}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Typography>
    </Grid>
    <Grid xs={12} sm={12} md={12}>
      {props.children}
    </Grid>
  </Grid>
);

export default NewAddComponent;
