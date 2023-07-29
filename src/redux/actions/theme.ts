;
import {CHANGE_MODE_THEME} from "@yuyuid/src/redux/constants/theme";

interface modeThemeProps {
  mode: string | 'light' | 'dark' | null
}
export const ChangeModeTheme = (payload:modeThemeProps)=> ({
  type:CHANGE_MODE_THEME,
  payload
})