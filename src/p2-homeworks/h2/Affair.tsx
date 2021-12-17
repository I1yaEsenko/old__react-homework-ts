import React from 'react'
import a from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    id: number
    name: string
    affair: string // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any_
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => props.deleteAffairCallback(props.id)

    return (
        <div className={a.wrapper}>
            <div className={a.title}>{props.name}</div>
            <div className={a.priority}>{props.affair}</div>
            <button className={a.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair


