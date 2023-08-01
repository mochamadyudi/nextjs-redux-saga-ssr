import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarDashboard from "@yuyuid/src/components/layout-component/dashboard/navbar.dashboard";
import SidebarDashboard from "@yuyuid/src/components/layout-component/dashboard/sidebar.dashboard";
import {UpdateStateHook} from "@yuyuid/hooks";

function Dashboard({children,...props}:{
  children: React.ReactNode | undefined,
  [key:string]: any
})  {
  UpdateStateHook({...props?.preloadState})
  return (
   <div className={'yid-main dashboard'}>
     <NavbarDashboard/>
     <div className="yid-layout">
       <SidebarDashboard/>
       <div className="yid-content">
         <pre>{JSON.stringify(props,null,2)}</pre>
         {children}
       </div>
     </div>
   </div>
  );
}

export default Dashboard;