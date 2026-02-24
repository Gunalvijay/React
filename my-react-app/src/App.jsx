import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from "./Examples/Card";
import Button from "./Examples/Button";
import List from "./Examples/List";
import Counter from "./Examples/Counter";
import Demo from "./Examples/Render";
import Effect from "./Examples/Effect";
import ComponentA from "./Examples/UseContext/ComponentA";
import Example from "./Examples/UseMemo/WithoutUseMemo";
import Examples from "./Examples/UseMemo/WithUseMemo";
import Parents from "./Examples/UseCallback/withoutUseccallback";
import Parent from "./Examples/UseCallback/withUsecallback";
import Layout from "./Examples/UseLayoutEffect";
import ReactMemo from "./Examples/React.memo/Recmemo";
import ReactMemo1 from "./Examples/React.memo/Recmemo1";
import Home from "./Examples/Router/Home";
import About from "./Examples/Router/About";

function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}


export default App