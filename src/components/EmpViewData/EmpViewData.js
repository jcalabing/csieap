import React from "react";
import { Component } from "react";
import { post } from "axios";

class EmpViewData extends Component {
  state = {
    selectedFile: null,
  };
  filseSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
    post("http://192.168.0.10:5001/uploads", fd).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <h1>React js File Upload Tutorial</h1>
        <input type="file" onChange={this.filseSelectedHandler} name="file" />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default EmpViewData;
