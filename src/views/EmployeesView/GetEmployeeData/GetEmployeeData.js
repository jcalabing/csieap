import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import EmployeeApi from "./../../../API/EmployeeApi";

const columns = [
  //   { field: "id", headerName: "ID Number", width: 150 },
  { field: "firstname", headerName: "First Name", width: 200 },
  { field: "surname", headerName: "Sur Name", width: 200 },
  {
    field: "appointment_status",
    headerName: "Appointment Status",
    width: 250,
  },
  {
    field: "position_title",
    headerName: "Position Title",
    width: 200,
  },
  {
    field: "department",
    headerName: "Unit",
    width: 200,
  },
];

class GetEmployeeData extends Component {
  state = {
    responseData: [],
  };

  componentDidMount() {
    EmployeeApi.getEmployees((data) => this.setState({ responseData: data }));
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

export default GetEmployeeData;
