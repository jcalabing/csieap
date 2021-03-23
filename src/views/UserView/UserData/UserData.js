import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
}));

const columns = [
  { field: "id", headerName: "ID Number", width: 150 },
  { field: "username", headerName: "User Name", width: 200 },
  { field: "account_type", headerName: "Account Type", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 250,
  },
  {
    field: "datecreated",
    headerName: "Date Created",
    width: 300,
  },
];

const rows = [{ id: 1, account_type: "Snow", username: "Jon", age: 35 }];

export default function UserData() {
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
