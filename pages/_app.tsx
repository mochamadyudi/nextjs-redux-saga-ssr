import React from 'react';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AppProvider} from "@yuyuid/provider";
import {NextPageContext} from "next";
import {Stores} from "@yuyuid/redux";
import {Provider} from "react-redux";

export const config = {
  amp: "hybrid"
}
let {
  store,
  wrapper
} = Stores
function MyApp({Component, pageProps}:any) {
  return (
    //@ts-ignore
    <Provider store={store}>
      <AppProvider mode={'default'}>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>

  )
}

//@ts-ignore
MyApp.getInitialProps = async ({Component, ctx}: NextPageContext) => {
  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  let state = store.getState()
  return {pageProps,state}
}
export default wrapper.withRedux(MyApp)