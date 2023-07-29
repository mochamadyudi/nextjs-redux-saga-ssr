import {themeTypes} from "@yuyuid/types";

export interface collectionProps {
  theme:{
    selected: themeTypes | null,
    loading: boolean,
    list: themeTypes[] | []
  }
}

const themeInterface :object = <object>{
  // collectionProps
}

export {themeInterface}