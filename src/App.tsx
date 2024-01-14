import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Star from "./page/Star";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
