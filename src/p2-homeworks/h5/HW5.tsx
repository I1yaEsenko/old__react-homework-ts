import React from 'react'
import Header from './Header'
import RoutesLink from './RoutesLink'
import {HashRouter} from 'react-router-dom';

function HW5() {
   return (
      <div>
         <HashRouter>
            <Header/>
            <RoutesLink/>
         </HashRouter>
      </div>
   )
}

export default HW5
