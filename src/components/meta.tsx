import React, {ReactComponentElement} from 'react'
import {getEnv} from "@yuyuid/utils";
import Head from "next/head";


let title =  getEnv("NEXT_APP_TITLE")

interface MetaData {
  //@ts-ignore
  title?: string | title,
  keyword?:string | null,
  description?:string | null,
}
interface MetaProps extends  MetaData{
  children?: React.ReactNode | Function | undefined,
}
export default function Meta(props: MetaProps) {
  let { children,title,description,keyword } = props
  return (
    <Head>
      <title>{title ?? getEnv('TITLE','public')}</title>
      <meta name="description" content={`${description ?? getEnv('DESCRIPTION','public')}`}/>
      <meta name="keyword" content={`${description ?? getEnv('KEYWORD','public')}`}/>
      {
        typeof(children) === 'function' ? children({
          key: `children-${Math.random()}`
        }): children
      }
    </Head>
  )
}