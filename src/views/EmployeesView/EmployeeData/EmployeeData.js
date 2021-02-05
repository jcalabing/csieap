import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "Appointment Status",
    width: 250,
  },
  {
    field: "title",
    headerName: "Position Title",
    width: 200,
  },
  {
    field: "agency",
    headerName: "Department/Office",
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Doxie", firstName: "Darvey", age: 61 },
];

export default function EmployeeData() {
  const classes = useStyles();
  return (
    <DataGrid
      className={classes.root}
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10, 20, 50, 100]}
      autoHeight
      disableSelectionOnClick
      showToolbar
      width
    />
  );
}
