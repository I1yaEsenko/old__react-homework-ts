import React, {useState} from 'react'
import Affairs from './Affairs'
import a from './Affairs.module.css'
// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
    classColor: string
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high', classColor: ''},
    {_id: 2, name: 'Anime', priority: 'low', classColor: ''},
    {_id: 3, name: 'Games', priority: 'low', classColor: ''},
    {_id: 4, name: 'Work', priority: 'high', classColor: ''},
    {_id: 5, name: 'HTML & CSS', priority: 'middle', classColor: ''},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'high') {
        affairs = affairs.filter(a => a.priority === 'high')
    } else if (filter === 'middle') {
        affairs = affairs.filter(a => a.priority === 'middle')
    } else if (filter === 'low') {
        affairs = affairs.filter(a => a.priority === 'low')
    }
    return affairs // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    affairs = affairs.filter(a => a._id !== _id)
    return affairs
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any
    return (
        <div className={a.mainWrapper}>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
