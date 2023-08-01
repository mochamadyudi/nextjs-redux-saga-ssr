import {
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
  createEmotionCache,
  ColorScheme
} from '@mantine/core';
import {useHotkeys, useLocalStorage} from '@mantine/hooks';
import {ReactComponentElement} from "react";


const emotionCache = createEmotionCache({ key: 'esm' });
function ThemeProvider(
  {
    children
  }: {
    children: ReactComponentElement<any>
  }
){
  const theme = useMantineTheme();
  const [ colorScheme, setColorScheme ] = useLocalStorage<ColorScheme>({
    key:'esm-mode',
    defaultValue:'light',
    getInitialValueInEffect:true
  })
  const toggleColorScheme = (value?: ColorScheme)=> {
    setColorScheme(value || (colorScheme === 'dark' ? 'light':  'dark'))
  }

  useHotkeys([
    [
      'mod+j', ()=> toggleColorScheme()
    ]
  ])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        emotionCache={emotionCache}
        theme={{
          fontFamily:"Roboto, sans-serif",
          colorScheme
        }}
        withNormalizeCSS
      >
        {children}
      </MantineProvider>

    </ColorSchemeProvider>
  )
}

export default ThemeProvider