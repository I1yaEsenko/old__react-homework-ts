import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';

export const PATH = {
   PRE_JUNIOR: '/pre-junior',
   JUNIOR: '/junior',
   JUNIOR_PLUS: '/junior-plus',
   // add paths
}

function RoutesLink() {
   return (
      <div>
         <Routes>
            <Route path={'/'} element={() => <Navigate  to={PATH.PRE_JUNIOR}/>}/>
            <Route path={'/'} element={() => <Navigate  to={PATH.JUNIOR}/>}/>
            <Route path={'/'} element={() => <Navigate  to={PATH.JUNIOR_PLUS}/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route element={() => <Error404/>}/>
         </Routes>
      </div>
   )
}

export default RoutesLink
