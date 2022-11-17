import {useLocation} from "react-router-dom";


type LocationState<State>= ReturnType<typeof useLocation> & {state:State}

const useAppLocation =<State> ():LocationState<State> => useLocation() as any;


export {useAppLocation}