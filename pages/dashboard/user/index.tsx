import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from "@yuyuid/src/components/meta";
import {wrapper} from "@yuyuid/src/redux/store";
import {getEnv} from "@yuyuid/utils";


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
     <h1>User</h1>
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
          title:['USER',getEnv('TITLE','public')].join(' | '),
          description:getEnv('DESCRIPTION','public'),
          keyword:getEnv('KEYWORD','public'),
        }
      }
    }
  })
export default Index;