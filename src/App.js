import React from 'react';
//import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import classes from "./index.module.css";
function App() {

  return (
    <>
      <div className={classes.contentApp}>
        <Home />
      </div>
    </>
  );
}

export default App;
