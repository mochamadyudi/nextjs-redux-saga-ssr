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
  return rootReducers(state,action)
}
export default rootReducers
// export default reducer