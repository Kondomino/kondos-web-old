import {
    CREATE_KONDOS,
    DELETE_KONDOS,
    UPDATE_KONDOS,
    RETRIEVE_KONDOS,
    POPULATE_KONDOS
  } from './../../actions/types'
import { initialState } from './kondos.initial'
  
  
  export default function kondosReducerDocStyle(state = initialState, action: any) {
    switch (action.type) {
      
      case RETRIEVE_KONDOS:
        return state.allKondos.filter(kondo => kondo.id == action.id)

      case CREATE_KONDOS:
        return [
          ...state.allKondos,
          {
            id: state.allKondos.reduce((maxId, kondo) => Math.max(kondo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
  
      case DELETE_KONDOS:
        return state.allKondos.filter(kondo => kondo.id !== action.id)
  
      case POPULATE_KONDOS:
        console.log('populating kondos...');
        console.log('action', action);
        const { kondos } = action;
        
        state.allKondos = kondos;

      case UPDATE_KONDOS:
        return state.allKondos.map(kondo =>
          kondo.id === action.id ? { ...kondo, text: action.text } : kondo
        )
  
        /*
      case COMPLETE_KONDOS:
        return state.allKondos.map(kondo =>
          kondo.id === action.id ? { ...kondo, completed: !kondo.completed } : kondo
        )
  
      case COMPLETE_ALL_KONDOSS:
        const areAllMarked = state.allKondos.every(kondo => kondo.completed)
        return state.allKondos.map(kondo => ({
          ...kondo,
          completed: !areAllMarked
        }))
        
  
      case CLEAR_COMPLETED:
        return state.allKondos.filter(kondo => kondo.completed === false)
  */

      default:
        return state
    }
  }
  