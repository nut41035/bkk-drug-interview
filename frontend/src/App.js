import React from "react";

import One from "./screen/One";
import Two from "./screen/Two";
import Three from "./screen/Three";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<One />} />
        <Route exact path="/cart" element={<Two />} />
        <Route exact path="/summary" element={<Three />} />
      </Routes>
    </Router>
  );
};

export default App;
