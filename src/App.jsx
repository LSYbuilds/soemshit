import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Subpage from "./Sub1";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/subpage" element={<Subpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
