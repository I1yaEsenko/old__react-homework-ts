import {UserType} from "../HW8";

type GeneralType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: GeneralType): Array<UserType> => { // need to fix any
   switch (action.type) {
      case 'sort': {
         const newState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
         return action.payload === 'up' ? newState : newState.reverse()
      }
      case 'check': {
         return [...state].filter(f => f.age > 18)
      }
      default:
         return state
   }
}


