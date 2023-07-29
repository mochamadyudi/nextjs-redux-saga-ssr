export type palleteThemeTypes = {
  light:{
    base: string,
    secondary: string,
    border: string,
    background: string
  },
  dark: {
    base: string,
    secondary: string,
    border: string,
    background: string
  }


}

export type themeTypes = {
  id: number | string,
  identifier: string,
  pallete: palleteThemeTypes
}
