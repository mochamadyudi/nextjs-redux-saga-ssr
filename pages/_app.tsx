import React from 'react';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AppProvider} from "@yuyuid/provider";
import {NextPageContext} from "next";
import {Stores} from "@yuyuid/redux";
import {Provider} from "react-redux";
import {UpdateStateHook} from "@yuyuid/src/hooks/update-state.hook";

// export const config = {
//   // amp: "hybrid"
// }
let {
  store,
  wrapper
} = Stores
function MyApp({Component, pageProps,state}:any) {
  return (
    //@ts-ignore
    <Provider store={store}>
      <AppProvider mode={'default'} {...pageProps} state={pageProps?.preloadState} >
        <Component {...pageProps} state={pageProps?.preloadState} />
      </AppProvider>
    </Provider>

  )
}

//@ts-ignore
MyApp.getInitialProps = async ({Component, ctx}: NextPageContext) => {
  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  let state = store.getState()
  Reflect.set(pageProps,'state',state)
  return {pageProps,state}
}
export default wrapper.withRedux(MyApp)