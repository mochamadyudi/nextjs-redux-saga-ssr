// import React, {ReactComponentElement} from 'react'
// import { render } from '@testing-library/react';
// import PagesDashboardUser from "@yuyuid/pages/dashboard/user";
// import {getEnv} from "@yuyuid/utils";
//
// jest.mock('next/head', function(){
//   return {
//     __esModule: true,
//     default: ({children}:{children:ReactComponentElement<any> | Function | React.ReactNode | undefined})=> {
//       return children
//     }
//   }
// })
//
//
// test('[pages]: path: /dashboard/user - TEST Meta Title', function(){
//   render(<PagesDashboardUser head={{
//     title:['USER',getEnv('TITLE','public')].join(' | '),
//     description:getEnv('DESCRIPTION','public'),
//     keyword:getEnv('KEYWORD','public'),
//   }}/>);
//
//   const titleElement = document.querySelector('title');
//   expect(titleElement).toHaveTextContent('USER | CORE@2023');
//
// })