import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./RoutesLink";
import './main.css'
import 'boxicons'

let setActive: (string | ((props: { isActive: boolean; }) => string) | undefined) =
   ({isActive}) => !isActive ? 'link' : 'active link';

function Header() {
   const [close, setClose] = useState<boolean>(false)

   const addCloseClass = () => {
      setClose(!close)
   }
   return (

      <div className={close ? `${'sidebar'} ${'close'}` : 'sidebar'}>
         <div className='wrapper'>
            <div className='toggle-bar'>
               <i className='bx bx-chevron-left toggle' onClick={addCloseClass}></i>
            </div>

            <ul className='menu'>
               <li>
                  <NavLink to={PATH.PRE_JUNIOR} className={setActive}><i className='bx bx-angry icon'></i><span className='text'>Pre-junior</span></NavLink>
               </li>
               <li>
                  <NavLink to={PATH.JUNIOR} className={setActive}> <i className='bx bx-smile icon'></i><span className='text'>Junior</span></NavLink>
               </li>
               <li>
                  <NavLink to={PATH.JUNIOR_PLUS} className={setActive}><i className='bx bx-happy-beaming icon'></i><span className='text'>Junior-Plus</span></NavLink>
               </li>

            </ul>
         </div>


      </div>
   )
}

export default Header
