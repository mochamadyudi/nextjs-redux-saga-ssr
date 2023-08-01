import {themeTypes} from "@yuyuid/types";

/**
 * @author mochamadyudi
 * @description - mode enable type [ string, "light", "dark", null ]
 */
export interface modeThemeProps {
  mode: string | 'light' | 'dark' | null
}

/**
 * @description - destructuring in state or propertyKey theme in state Theme at redux
 */
interface stateThemeInProps {
  selected: themeTypes | null, // any selected theme
  loading: boolean // loading is triggered any event
  list: themeTypes | [] // list theme

}

/**
 * TODO: if you need custom in here
 */
export interface collectionProps {
  theme:stateThemeInProps
}
