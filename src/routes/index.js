import { Routes,Route } from "react-router-dom";

import SigIn from "../pages/SigIn";

import SigUp from "../pages/SigUp";


function RoutesApp(){
      return (
           <Routes>
                  <Route path="/" element={<SigIn/>}/>
                  <Route path="/register" element={<SigUp/>}/>
           </Routes>
      )
}


export default RoutesApp;