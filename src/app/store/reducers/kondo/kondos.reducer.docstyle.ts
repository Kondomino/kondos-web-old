import {
    CREATE_KONDOS,
    DELETE_KONDOS,
    UPDATE_KONDOS,
    RETRIEVE_KONDOS
  } from './../../actions/types'
import { initialState } from './kondos.initial'
  
  
  export default function kondosReducerDocStyle(state = initialState, action: any) {
    switch (action.type) {
      
      case RETRIEVE_KONDOS:
        return state.filter(kondo => kondo.id == action.id)

      case CREATE_KONDOS:
        return [
          ...state,
          {
            id: state.reduce((maxId, kondo) => Math.max(kondo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
  
      case DELETE_KONDOS:
        return state.filter(kondo => kondo.id !== action.id)
  
      case UPDATE_KONDOS:
        return state.map(kondo =>
          kondo.id === action.id ? { ...kondo, text: action.text } : kondo
        )
  
        /*
      case COMPLETE_KONDOS:
        return state.map(kondo =>
          kondo.id === action.id ? { ...kondo, completed: !kondo.completed } : kondo
        )
  
      case COMPLETE_ALL_KONDOSS:
        const areAllMarked = state.every(kondo => kondo.completed)
        return state.map(kondo => ({
          ...kondo,
          completed: !areAllMarked
        }))
        
  
      case CLEAR_COMPLETED:
        return state.filter(kondo => kondo.completed === false)
  */

      default:
        return state
    }
  }
  