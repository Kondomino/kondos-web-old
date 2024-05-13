import { CREATE_KONDOS, RETRIEVE_KONDOS, UPDATE_KONDOS, DELETE_KONDOS, DELETE_ALL_KONDOS } from "../../actions/types";
import { initialState } from "./kondos.initial";

function KondosReducers(KONDOS = initialState, action: any) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_KONDOS:
        return [...KONDOS, payload];
  
      case RETRIEVE_KONDOS:
        return payload;
  
      case UPDATE_KONDOS:
        return KONDOS.map((KONDOS) => {
          if (KONDOS.id === payload.id) {
            return {
              ...KONDOS,
              ...payload,
            };
          } else {
            return KONDOS;
          }
        });
  
      case DELETE_KONDOS:
        return KONDOS.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_KONDOS:
        return [];
  
      case 'HIT':
        return KONDOS.map(item => item.kondoState = !item.kondoState);
  
      default:
        return KONDOS;
    }
  };
  