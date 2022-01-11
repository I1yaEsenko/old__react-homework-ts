import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./RoutesLink";
import s from './main.module.css'


let setActive: (string | ((props: { isActive: boolean; }) => string) | undefined) =
   ({isActive}) => !isActive ? `${s.link}` : `${s.active} ${s.link}`;

function Header() {

   return (
      <div className={s.header}>
         <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}/>
         <label className={s.menuSpan} htmlFor={'hmt'}>
            <span className={s.first}></span>
            <span className={s.second}></span>
            <span className={s.third}></span>
         </label>
         <ul className={s.menu}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={setActive}
            >Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={setActive}
            >Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={setActive}
            >Junior-Plus</NavLink>
         </ul>
      </div>
   )
}

export default Header
