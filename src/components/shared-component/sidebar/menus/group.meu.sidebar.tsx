import React, { Component } from 'react';
import MenuSidebar from "@yuyuid/src/components/shared-component/sidebar/menus/menu.sidebar";

function GroupMeuSidebar(props: any)  {
  return (
   <div className={[props?.className,'app-sidebar-group item-group'].join(' ')}>
     <div className="item-group--nav">
       <span>{props?.label}</span>
       <span>Arrow</span>
     </div>
     <div className="item-group--content">

     </div>
     {/*<p>GROUP</p>*/}
     {/*<pre>{JSON.stringify(props,null,2)}</pre>*/}
     {/*<GroupMeuSidebar {...props}/>*/}
   </div>
  );
}

export default GroupMeuSidebar;