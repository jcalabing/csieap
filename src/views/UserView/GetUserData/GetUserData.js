import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import UserApi from "./../../../API/UserApi";

const columns = [
  { field: "user_name", headerName: "User Name", width: 200 },
  { field: "account_type", headerName: "Account Type", width: 200 },
  {
    field: "account_status",
    headerName: "Status",
    width: 250,
  },
  {
    field: "account_created",
    headerName: "Date Created",
    width: 300,
  },
];

class GetUserData extends Component {
  state = {
    responseData: [],
  };

  componentDidMount() {
    UserApi.getUsers((data) => this.setState({ responseData: data }));
    console.log("loaded!");
  }

  render() {
    return (
      <div>
        <DataGrid
          rows={this.state.responseData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50, 100]}
          autoHeight
          disableSelectionOnClick
          showToolbar
          width
        />
      </div>
    );
  }
}

export default GetUserData;
