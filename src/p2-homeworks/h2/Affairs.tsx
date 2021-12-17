import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import a from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id:number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={a._id}
            name={a.name}
            affair={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={a.affairs}>

            {mappedAffairs}

            <button className={a.priorityButton} onClick={setAll}>All</button>
            <button className={a.priorityButton} onClick={setHigh}>High</button>
            <button className={a.priorityButton} onClick={setMiddle}>Middle</button>
            <button className={a.priorityButton} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
