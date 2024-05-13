import React, { Key } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { createKONDO, findKONDOSByID } from "../store/actions/kondos.actions";
import { CreateKondoDTO } from "../store/dtos/create.kondo.dto";

const StupidButton = () => {
  
  const kondos:any = useAppSelector((state) => state.kondos);
  const dispatch = useAppDispatch();

  const newKondo = new CreateKondoDTO();
  newKondo.name = 'do FRONT';

  return (
    <div>
      state is {kondos.map((kondo: { name: string, id: Key }, key: Number) => <div key={kondo.id}>{kondo.name}</div>)}
      <button onClick={() => dispatch(createKONDO(newKondo))}>Create Kondo</button>
      <button onClick={() => dispatch(findKONDOSByID(289))}>Find Kondo serra</button>
    </div>
  );
};
export default StupidButton;

//<button onClick={() => dispatch({})}>Log in</button>
//<button onClick={() => dispatch(setKondoState(false))}>Log out</button>
//<button onClick={() => dispatch({type: 'CREATE_KONDO', { id: 2, name: 'BOTA'}})}>Log in</button>