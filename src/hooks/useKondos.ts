import { createGlobalState } from "react-hooks-global-state";



const { useGlobalState } = createGlobalState(initialState);

export const useKondos = () => {
  const [playbackRate, setplaybackRate] = useGlobalState("kondos");
  
  //const [duration, setDuration] = useGlobalState("selectedKondo");

  return  {

  }
}