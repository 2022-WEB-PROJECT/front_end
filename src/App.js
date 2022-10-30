import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Test1 from "./components/test1";
import Test2 from "./components/test2";
import Test3 from "./components/test3";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
