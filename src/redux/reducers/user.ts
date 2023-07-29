import {actionProps} from "@yuyuid/interface";
import {themeTypes} from "@yuyuid/types";
import {collectionProps} from "@yuyuid/src/typedef/interface/theme.interface";
import {REQUEST} from "@yuyuid/redux";
import {CHANGE_MODE_THEME} from "@yuyuid/src/redux/constants/theme";

type themeStateProps = {
  isAuthenticated: boolean | false,
}

let initialState = <themeStateProps>{
  isAuthenticated: false
}


export default function(state = initialState,action:actionProps){
  let { type, payload} = action
  switch (type){
    default:
      return state
  }
}