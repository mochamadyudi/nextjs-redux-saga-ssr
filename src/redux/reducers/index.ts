import {combineReducers} from "redux";
import Theme from './theme'
import User from './user'
import {HYDRATE} from "next-redux-wrapper";

const rootReducers = combineReducers({
  theme:Theme,
  user:User,
})

interface ActionProps {
  type: string,
  payload: any
}
const reducer = function(state:any,action:ActionProps){

  if(action.type === 'PRELOAD_STATE'){
    state = {
      ...state,
      ...action?.payload
    }
  }
    //@ts-ignore
    return rootReducers(state,action)
}
export default reducer
// export default reducer