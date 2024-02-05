import React from "react";
import ReactDom  from "react-dom";
import App from "./components/App";


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Sfooter from "./components/Sfooter";



ReactDom.render(
<div>
<Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/sign" element={<Sfooter/>}/>
    </Routes>
  </Router>
</div>,
  
  document.getElementById("root")
);