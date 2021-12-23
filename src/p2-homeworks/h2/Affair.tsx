import React from 'react'
import a from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any_
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    //    добавляем класс к элементу для задания уникального цвета
    const priorityClass = a.priority + ' ' + a[props.affair.priority]

    return (
        <div className={a.wrapper}>
            <div className={a.title}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <button className={a.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

