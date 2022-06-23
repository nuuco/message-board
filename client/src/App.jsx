import React from "react";
import { Routes, Route } from 'react-router-dom';
import List from './components/List';
import Update from "./components/Update";
import Navi from "./components/Navi";

function App() {
  return (
    <>
    <Navi />
    <Routes>
      <Route path={"/"} element={<List/>} />
      <Route path={"/new"} element={<Update/>} />
    </Routes>
    </>
  );
}

export default App;
