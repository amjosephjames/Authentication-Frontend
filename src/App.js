import React from "react";
import Homescreen from "../src/components/homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../src/components/signup";
import Signin from "../src/components/signin";
import Mainscreen from "../src/components/mainscreen"
const app = () => {
  return (
    // <div>
    //   <Homescreen />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mainscreen" element={<Mainscreen/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default app;
