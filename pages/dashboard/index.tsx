import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from "@yuyuid/src/components/meta";
import {getEnv} from "@yuyuid/utils";
import {UpdateStateHook} from "@yuyuid/hooks";
import {wrapper} from "@yuyuid/src/redux/store";
import {ChangeModeTheme} from "@yuyuid/redux";

function Index({
  head:{title,description,keyword}
,...props}:{
  head: {
    title: string,
    description:string,
    keyword: string
  },
})  {

  return (
   <div>
     <Meta
       title={title}
       description={description}
       keyword={keyword}
     />
     <h1>Dashboard {getEnv('NEXT_APP_TITLE')}</h1>
   </div>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(
  // @ts-ignore
  (store) => async (ctx) => {
    //@ts-ignore
    return {
      props: {
        head:{
          title:getEnv('TITLE','public'),
          description:getEnv('DESCRIPTION','public'),
          keyword:getEnv('KEYWORD','public'),
        }
      }
    }
  })
export default Index;