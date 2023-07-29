import {actionProps} from "@yuyuid/interface";
import {themeTypes} from "@yuyuid/types";
import {collectionProps} from "@yuyuid/src/typedef/interface/theme.interface";
import {REQUEST} from "@yuyuid/redux";
import {CHANGE_MODE_THEME} from "@yuyuid/src/redux/constants/theme";

type themeStateProps = {
  mode: string | 'light' | 'dark' | null,
  collection:collectionProps | object
}

let initialState = <themeStateProps>{
  mode: null,
  collection: {
    theme:{
      loading:false,
      selected:null,
      list:[]
    }
  }
}


export default function(state = initialState,action:actionProps){
  let { type, payload} = action
  switch (type){
    case CHANGE_MODE_THEME:
      return {
        ...state,
        //@ts-ignore
        ...payload,
      }
    default:
      return state
  }
}