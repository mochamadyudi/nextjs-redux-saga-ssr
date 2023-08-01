import {modeThemeProps} from "@yuyuid/interface";

;
import {CHANGE_MODE_THEME} from "@yuyuid/src/redux/constants/theme";


/**
 * @param {modeThemeProps} payload
 * @constructor
 * @return {object}
 * Example : { type :"event_action", payload:{mode:"light"}}
 */
export const ChangeModeTheme = (payload:modeThemeProps)=> {
  return {
    type:CHANGE_MODE_THEME,
    payload
  }
}