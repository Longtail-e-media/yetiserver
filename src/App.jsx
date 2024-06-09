import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IndexPage from "./components/IndexPage";
import Apanel from "./components/Apanel";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/apanel" element={<Apanel />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
