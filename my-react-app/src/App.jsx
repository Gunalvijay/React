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
import Profile from "./Examples/outlet/Profile";
import Settings from "./Examples/outlet/Settings";
import Dashboard from "./Examples/outlet/Dashboard";

function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />}/>
              <Route path="settings" element={<Settings />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}


export default App