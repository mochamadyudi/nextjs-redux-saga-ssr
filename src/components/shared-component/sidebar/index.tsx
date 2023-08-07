import React, {useState} from 'react';
import {MapMenuParent} from "@yuyuid/utils";
import sidebarMenu from "@yuyuid/src/configs/sidebar.menu";
import MenuSidebar from "@yuyuid/src/components/shared-component/sidebar/menus/menu.sidebar";
import GroupMeuSidebar from "@yuyuid/src/components/shared-component/sidebar/menus/group.meu.sidebar";

function SidebarLayout()  {

  const [ menus, setMenus ] = useState(()=> MapMenuParent({
    menus:sidebarMenu,
    attributes:'subMenu'
  }))

  // @ts-ignore
  return (
   <aside className={'app-sidebar'} id="app-sidebar" data-testid={'sidebarContainer'}>
     <section className="app-sidebar-content" id="app-sidebar-content" aria-expanded="false">
       <MenuSidebar data-testid={'menuSidebar'}>
         {
           //@ts-ignore
           Array.isArray(menus) && menus.map((item:any,index:number)=> (
             Array.isArray(item?.subMenu) && item?.subMenu.length > 0 ?
               <MenuSidebar.Group {...item}/>
               :
             <MenuSidebar.Item {...item} title={item?.label ?? "-"} key={`menu-sidebar-${index}`}/>
           ))
         }
       </MenuSidebar>
     </section>
   </aside>
  );
}

export default SidebarLayout;