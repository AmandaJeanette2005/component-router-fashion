import IndexLayout from "./layouts/IndexLayout";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Bag from "./pages/Bag";
import Fashion from "./pages/Fashion";
import MakeUp from "./pages/MakeUp";
import Shoes from "./pages/Shoes";
import Skincare from "./pages/Skincare";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          <Route path="/home"index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/make-up" element={<MakeUp />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/skincare" element={<Skincare />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
