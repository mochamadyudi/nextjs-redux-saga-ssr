import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from "next/link";

function mapStateToProps(state:{}) {
 return {

 };
}

function SidebarDashboard()  {
  return (
   <aside className={'yid-sidebar'}>
     <ul className={'yid-sidebar-content'}>
       {
         Array.from({length:10}).map((item,index)=> (
           <li className={'yid-sidebar-item'} key={index + Math.random()}>
             <div className={'item-content'}>
               {
                 index%2 ? (
                   <Link href="/dashboard/user">User</Link>
                 ):
                   <Link href="/dashboard">Dashboard</Link>
               }
             </div>
           </li>
         ))
       }

     </ul>
   </aside>
  );
}

export default connect(
 mapStateToProps,
)(SidebarDashboard);