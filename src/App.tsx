import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FDA734",
      dark: "#f6d776",
      main: "#fff",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
