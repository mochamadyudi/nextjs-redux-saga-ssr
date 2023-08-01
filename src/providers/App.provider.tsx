import React, {Component, ReactComponentElement} from 'react';
import ThemeProvider from "@yuyuid/src/providers/theme.provider";
import {useRouter} from "next/router";
import Dashboard from "@yuyuid/src/components/layout-component/dashboard";


function AppSplitting({children,...props}: {
  children: ReactComponentElement<any> | undefined
}) {
  const router = useRouter()
  if (router.asPath.startsWith('/dashboard')) {
    return (
      <Dashboard {...props}>
        {children}
      </Dashboard>
    )
  } else {
    return children
  }
}


interface AppProviderProps {
  mode?: string | 'default',
  children: React.ReactNode | undefined
}

export default class AppProvider extends Component<AppProviderProps> {
  componentDidMount() {
    if (typeof this.props.children === 'undefined') {
      // @ts-ignore
      throw new Error('Error: children is undefined')
    }
  }

  render() {
    return (
      <ThemeProvider>
        <AppSplitting {...this.props}>
          <main className={'yid-main'}>
            {this.props.children}
          </main>
        </AppSplitting>
      </ThemeProvider>
    )
  }
}