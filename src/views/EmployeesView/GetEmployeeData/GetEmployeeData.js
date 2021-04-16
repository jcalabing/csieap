import { React, Component } from "react";
import Button from "@material-ui/core/Button";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  CellParams,
  GridApi,
} from "@material-ui/data-grid";
import EmployeeApi from "./../../../API/EmployeeApi";
import Extheme from "./../../../assets/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DialogBox from "./../../../components/DialogBox";
import FormPDS from "./../../../components/FormPDS";
import PDSBox from "./../../../components/PDSBox";
import PDFBox from "./../../../components/PDFBox";

const columns: ColDef[] = [
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
  {
    field: "",
    headerName: "Actions",
    sortable: false,
    width: 200,
    disableClickEventBubbling: true,
    renderCell: (params: CellParams) => {
      // const onView = () => {
      //   PdfView;
      // };
      // const onEdit = () => {
      //   console.log("EDIT DATA");
      //   console.log(params.row);
      // };

      return (
        <>
          {/* <Button onClick={}>View</Button> */}
          <PDFBox
            title="Personal Data Sheet PDF View"
            buttonName="PDF VIEW"
            jsonData={params.row}
          />
          <PDSBox
            title="Update Employee"
            buttonName="EDIT"
            jsonData={params.row}
            isUpdate={true}
          />
        </>
      );
    },
  },
];

class GetEmployeeData extends Component {
  state = {
    responseData: [],
  };

  componentDidMount() {
    EmployeeApi.getEmployees((data) => this.setState({ responseData: data }));
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
