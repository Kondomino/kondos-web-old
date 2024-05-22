import React, { Key } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { createKONDO } from "../store/actions/kondos.actions";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import { KondoModel } from "../store/models/kondo.model";
import { _getKondoBySlug } from "../store/reducers/kondo/kondos.reducer";
import { connect } from "react-redux";
import { selectKondoBySlug } from "../store/selectors/kondos.selector";

const StupidButton = (props:any) => {
  
  const kondos:any = useAppSelector((state) => state.kondos);
  
  const dispatch = useAppDispatch();

  const onCreateKondoClicked = (): void => {
    const kondoDTO = new KondoModel();
    kondoDTO.name = 'blado';
    
    dispatch(createKONDO(kondoDTO));
  }

  return (
    <div>
      Kondo is: {props.kondo.name}
      <ButtonPrimary href="/" className="mt-4" onClick={onCreateKondoClicked}>
          Create Kondo
        </ButtonPrimary>
    </div>
  );
};
//export default StupidButton;

const mapStateToProps = (state: any) => {
  console.log('mapping...');
  console.log('state is ', state);

  const selected = selectKondoBySlug(state, 'do-front');

  console.log('selected', selected);

  return {
    kondo: selected
  }
}
export default connect(mapStateToProps)(StupidButton);

// CERTO
//state is {kondos.map((kondo: { name: string, id: Key }, key: Number) => <div key={kondo.id}>{kondo.name}</div>)}


//<button onClick={fetchThis}>Find Kondo bbb</button>
//<button onClick={() => dispatch({})}>Log in</button>
//<button onClick={() => dispatch(setKondoState(false))}>Log out</button>
//<button onClick={() => dispatch({type: 'CREATE_KONDO', { id: 2, name: 'BOTA'}})}>Log in</button>