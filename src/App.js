import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SignIn from "./features/SignIn";
import { Paper, Switch, Typography } from "@material-ui/core";
import {
  deepOrange,
  deepPurple,
  lightBlue,
  orange,
} from "@material-ui/core/colors";
import SignUp from "./features/SignUp";
import Sidebar from "./components/Sidebar";
import Box from "./components/Box";

function App() {
  const [darkState, setDarkState] = React.useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100vh", display: "flex" }} square>
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Sidebar />
        <Box />
        {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
