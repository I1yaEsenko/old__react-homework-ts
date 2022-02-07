import React from 'react'
import Clock from './Clock'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW9() {
   return (
      <div>
         <hr/>
         <div className={s.homework}>Homework 9</div>

         {/*should work (должно работать)*/}
         <Clock/>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeClock/>*/}
         <hr/>
      </div>
   )
}

export default HW9
