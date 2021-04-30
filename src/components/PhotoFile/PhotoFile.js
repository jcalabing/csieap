import React from "react";
import { Component } from "react";
import { post } from "axios";
import logo from "../../assets/img/pcalogo.png";
import { Grid, Button } from "@material-ui/core";

class PhotoFile extends Component {
  state = {
    selectedFile: null,
    file: this.props.photo ? this.props.photo : logo,
  };
  filseSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0]),
    });
    console.log(event.target.files[0]);
    // this.props.onChange(event.target.files[0]);
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
    fd.append("id", this.props.value);
    console.log(fd);
    post("http://192.168.0.10:5001/uploads", fd).then((res) => {
      console.log(res);
    });
  };

  render() {
    const logoimg = {
      height: 150,
      margin: "auto",
      align: "center",
    };
    return (
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <h3>Employee Photo</h3>
        </Grid>
        <Grid item xs={6}>
          <img src={this.state.file} alt="logo" style={logoimg} />
        </Grid>
        <Grid item xs={6}>
          <input type="file" onChange={this.filseSelectedHandler} name="file" />
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.fileUploadHandler}
          >
            Save Photo
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default PhotoFile;
