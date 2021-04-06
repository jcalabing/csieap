import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabandtabs-tabpanel-${index}`}
      aria-labelledby={`tabandtabs-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tabandtabs-tab-${index}`,
    "aria-controls": `tabandtabs-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabAndTabs(props) {
  const { tabName, tabContent } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          // variant="fullWidth"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
          {tabName.map((tabname, index) => {
            return <Tab label={tabname} key={index} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>
      {tabContent.map((tabcontent, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {tabcontent}
          </TabPanel>
        );
      })}
    </div>
  );
}
