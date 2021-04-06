import React from "react";
import { IconButton, Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { FieldDivider } from "./../FormField/FormField";

class AddComponent extends React.Component {
  state = {
    numChildren: 0,
    childDataList: [],
    childData: [],
    childList: [],
    children: {},
  };

  componentDidMount() {
    console.log("Add Component Loaded");
    var newValue = [];
    if (this.props.value) {
      newValue = this.props.value;
      var oldChildList = [];
      this.props.value.forEach((element, index) => {
        console.log(element);
        oldChildList[index] = this.childFunction(index, element);
      });

      console.log("oldchildlist");
      console.log(oldChildList);
      this.setState({
        childDataList: newValue,
        childList: oldChildList,
        numChildren: newValue.length,
        children: oldChildList,
      });
    }
  }

  render() {
    console.log("====================================");
    var reverseList = [];
    for (var i = this.state.childList.length - 1; i >= 0; i -= 1) {
      reverseList.push(this.state.childList[i]);
    }

    return (
      <ParentComponent addChild={this.onAddChild}>
        {reverseList}
      </ParentComponent>
    );
  }

  childFunction = (index, oldData) => {
    var newChildData = this.state.childData;
    if (oldData) {
      newChildData = oldData;
    }
    return (
      <this.props.children
        key={index}
        index={index}
        childData={newChildData}
        saveData={this.saveData}
        onRemoveChild={this.onRemoveChild}
      />
    );
  };

  onAddChild = () => {
    var newChildren = this.state.children;
    newChildren[this.state.numChildren] = this.childFunction(
      this.state.numChildren,
      {}
    );
    var newChildData = this.state.childData;
    newChildData[this.state.numChildren] = {};
    console.log(this.state.childDataList);
    this.setState({
      numChildren: this.state.numChildren + 1,
      children: newChildren,
      childList: Object.values(newChildren),
      childData: newChildData,
    });
  };

  onRemoveChild = (index) => {
    var newChildData = this.state.childData;
    delete newChildData[index];
    // newChildData[index] = undefined;
    var newChildren = this.state.children;
    delete newChildren[index];
    console.log(this.state.childList);
    this.setState({
      childData: newChildData,
      children: newChildren,
      childList: Object.values(newChildren),
    });
  };

  saveData = (index, Value) => {
    var newStateValue = this.state.childData;
    newStateValue[index] = Value;
    this.setState({
      childData: newStateValue,
    });
    this.props.onSave(this.props.dataKey, this.state.childData);
    console.log("====================================");
    console.log(this.state.childData);
    console.log("====================================");
  };
}

const ParentComponent = (props) => (
  <Grid container>
    <Grid xs={12} sm={1} md={1} style={{ margin: "auto", textAlign: "center" }}>
      <IconButton color="primary" component="span" onClick={props.addChild}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Grid>
    <Grid xs={12} sm={11} md={11}>
      {props.children}
    </Grid>
  </Grid>
);

export default AddComponent;
