import { createGlobalState } from "react-hooks-global-state";
import { KondoModel } from "../../data/kondos/kondo.model";

export const initialState: {
  kondos: KondoModel[]
} = { kondos: []};

const { useGlobalState } = createGlobalState(initialState);

export const useKondos = () => {
  const [kondos, setKondos] = useGlobalState("kondos");
  //const [duration, setDuration] = useGlobalState("selectedKondo");

  
  const filterKondoBySlug = (slug: string) => {
    return kondos.filter(item => item.slug == slug)
  }

  return  {
    kondos,
    setKondos,
    filterKondoBySlug
  }
}

