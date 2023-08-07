import React, {Component, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import sidebarMenu from "@yuyuid/src/configs/sidebar.menu";
import {MapMenuParent} from "@yuyuid/utils";
import SidebarLayout from "@yuyuid/src/components/shared-component/sidebar";

interface menuProps {
  subMenu?: menuProps[],
  path:string,
  key:string,
  label:string,
  [key:string|number]: any
}

let menu: menuProps[] = [
  {
    key:"home",
    path:"/",
    label:"Home",
    subMenu: []
  },
  {
    key:"settings",
    path:"/settings",
    label:"Settings",
    subMenu: [
      // {
      //   key:"settings.account",
      //   path:"/settings/account",
      //   label:"Account",
      //   subMenu: [
      //     {
      //       key:"settings.account.profile",
      //       path:"/settings/account/profile",
      //       label:"Profile",
      //       subMenu: []
      //     },
      //     {
      //       key:"settings.account.profile",
      //       path:"/settings/account/change-password",
      //       label:"Change Password",
      //       subMenu: []
      //     },
      //   ]
      // },
      {
        key:"settings.general",
        path:"/settings/general",
        label:"General",
        subMenu: [
          {
            key:"settings.general.site",
            path:"/settings/general/site",
            label:"Site",
            subMenu: []
          },
          {
            key:"settings.general.mode",
            path:"/settings/general/mode",
            label:"Theme Mode",
            subMenu: []
          },
        ]
      }
    ]
  },
  {
    key:"display",
    path:"/display",
    label:"Display",
    subMenu: [
      {
        key:"display.account",
        path:"/display/account",
        label:"Account",
        subMenu: [
          {
            key:"display.account.profile",
            path:"/display/account/profile",
            label:"Profile",
            subMenu: []
          },
          {
            key:"display.account.profile.2",
            path:"/display/account/profile.2",
            label:"Profile 2",
            subMenu: []
          },
        ]
      },
      {
        key:"display.setting",
        path:"/display/setting",
        label:"Display",
        subMenu: [
          {
            key:"display.account.profile",
            path:"/display/account/profile",
            label:"Display Profile",
            subMenu: [
              {
                key:"display.account.profile.test-1",
                path:"/display/account/profile/test-1",
                label:"Test 1",
                subMenu: [
                  {
                    key:"display.account.profile.test-1.test-1-1",
                    path:"/display/account/profile/test-1/test-1-1",
                    label:"Test 1.1",
                    subMenu: [
                      {
                        key:"display.account.profile.1",
                        path:"/display/account/profile.1",
                        label:"Test 1.1.1",
                        subMenu: []
                      },
                      {
                        key:"display.account.profile.2",
                        path:"/display/account/profile.2",
                        label:"Test 2.1.1",
                        subMenu: []
                      },
                      {
                        key:"display.account.profile.3",
                        path:"/display/account/profile.3",
                        label:"Test 3.1.1",
                        subMenu: []
                      },
                    ]
                  }
                ]
              },
              {
                key:"display.account.profile.test-2",
                path:"/display/account/profile/test-2",
                label:"Test 2",
                subMenu: []
              },
              {
                key:"display.account.profile/test-3",
                path:"/display/account/profile/test-3",
                label:"Test 3",
                subMenu: []
              },
            ]
          },
          {
            key:"display.account.profile",
            path:"/display/account/profile",
            label:"Profile",
            subMenu: []
          },
          {
            key:"display.account.profile",
            path:"/display/account/profile",
            label:"Profile 2",
            subMenu: []
          },
        ]
      }
    ]
  },
]

function NewSideDrawer({...props}:menuProps){
  let { onBack,onOpen,index,active } = props
  const ref = useRef(null)
  return Array.isArray(props?.subMenu) && props?.subMenu.length > 0 && (
    <div className={'menu-content--drawer'} key={props.key} ref={ref}>
      <div className="menu-content--header flex justify-between">
        <p className={'menu-content--title'}>{props.label} {[index,'test'].join(' | ')}</p>
        <button type={'button'} title={'back'} key={'button'} onClick={onBack}>Back</button>
      </div>
      <div className="menu-sub--drawer">
        {
          props.subMenu.map((item,i)=>(
            <div className={'menu-sub--item'} key={item.key}>
              {
                Array.isArray(item?.subMenu) && item?.subMenu.length > 0 ?
                  <button onClick={()=> onOpen(index,item?.key)}>{item?.label}</button>
                  :
                  <Link href={['/dashboard',item?.path].join('')} className="back-icon">{item?.label}</Link>
              }

              <NewSideDrawer {...props} {...item} index={i} onOpen={onOpen}
                             onBack={onBack}/>
            </div>
          ))
        }
      </div>

    </div>
  )
}

function SidebarDashboard()  {
  const ref = useRef(null)
  const [ active, setActive ] = useState([])
  const [ confMenu,setConfMenu ] = useState(()=> MapMenuParent({menus:sidebarMenu,attributes:'subMenu'}))
  let timeout
  function onOpen(index:number,key:string){
    // @ts-ignore
    setTimeout(()=> {
      // @ts-ignore
      setActive([...active,key])
      __setActive(key)
    },300)
    // @ts-ignore
    clearTimeout()
  }
  function __setActive(key:string){
    timeout = setTimeout(function(){
      let newMenu  = menu.filter((item,idx)=> {
        return item?.key === key
      })
      //@ts-ignore
      setConfMenu([...newMenu])
    },300)
    clearTimeout(timeout)
  }
  function onBackMenu(){
    if(active.length > 0){
      let newActive = active.slice(0,active.length - 1) ?? []
      // setConfMenu(menu)
      setActive([...newActive])
    }
  }


  useEffect(()=> {
    if(Array.isArray(active) && ref && ref.current){
      //@ts-ignore
      ref.current.style.transform = `translateX(calc(calc( var(--yid-sidebar-width) * ${active.length}) - (calc( var(--yid-sidebar-width) * ${active.length}) * 2))`
    }
  },[active])

  return (
   <div className={'yid-sidebar'}>
     <SidebarLayout/>
     {/*<div className="yid-menu">*/}
     {/*  <div className="yid-menu--layout">*/}
     {/*    {*/}
     {/*      //@ts-ignore*/}
     {/*      confMenu.sort((a:any,b:any)=> a?.order < b?.order).map((child)=> (*/}
     {/*        <div className="yid-menu-item" data-query={'testing'} key={`menu-item-${Math.random()}`}>*/}
     {/*          <p>{child?.label}</p>*/}
     {/*        </div>*/}
     {/*      ))*/}
     {/*    }*/}

     {/*  </div>*/}

     {/*</div>*/}




     {/*  <section className={'menu'} ref={ref}>*/}
     {/*    <ul className={'menu-content'}>*/}
     {/*      {*/}
     {/*        confMenu*/}
     {/*          .map((item,index)=> (*/}
     {/*            <li key={item?.key} className={'menu-item'}>*/}
     {/*              {*/}
     {/*                Array.isArray(item?.subMenu) && item?.subMenu.length > 0 ?*/}
     {/*                  <button onClick={()=> onOpen(index,item?.key)}>{item?.label}</button>*/}
     {/*                  :*/}
     {/*                  <Link href={['/dashboard',item?.path].join('')} className="back-icon">{[item?.path,item?.label].join(' | ')}</Link>*/}
     {/*              }*/}

     {/*              <NewSideDrawer {...item}*/}
     {/*                             subMenu={confMenu.filter((item)=> item?.key === (active[0] ?? null)) ?? item?.subMenu ?? []}*/}
     {/*                             active={active}*/}
     {/*                             onOpen={onOpen}*/}
     {/*                             onBack={onBackMenu}*/}
     {/*                             index={active.length > 0 ? active[active.length - 1] : null}/>*/}
     {/*            </li>*/}
     {/*          ))*/}
     {/*      }*/}
     {/*    </ul>*/}
     {/*  </section>*/}
     {/*</div>*/}
   </div>
  );
}

export default SidebarDashboard;






// import React, {Component, useState} from 'react';
// import { connect } from 'react-redux';
// import Link from "next/link";
// import {act} from "react-dom/test-utils";
//

//
// function SubFolder({
//   ...props
// }: {
//   subMenu?: menuProps[],
//   key:string,
//   path:string,
//   label:string,
//   level:number,
//   onClick:Function | any,
// }){
//   return (
//     <div className={'item-content submenu'} onClick={props?.onClick}>
//       <span>{props?.label}</span>
//       <span>Arrow</span>
//       {/*<pre>{JSON.stringify(props,null,2)}</pre>*/}
//     </div>
//
//   )
// }
//
// function SingleFolder({...props}){
//   return(
//     <div className={'item-content'}>
//       {props?.path}
//       <Link href={['/dashboard',props?.path].join('')}>{props?.label}</Link>
//     </div>
//   )
// }
//
//
// function SidebarDashboard()  {
//   const [active, setActive]:[menuProps[],Function] = useState([])
//   function onActive(val:object | any,submenu:any){
//     let newActive = []
//     for(let i = 0 ; i < active.length;i++){
//       newActive.push(active[i])
//     }
//
//     newActive.push({
//       label:val?.label,
//       [val?.key]:submenu
//     })
//     // @ts-ignore
//     setActive([...newActive])
//   }
//
//   console.log({active})
//   // @ts-ignore
//   return (
//    <aside className={'yid-sidebar'}>
//      {/*<pre>{JSON.stringify(menu,null,2)}</pre>*/}
//
//      <button className={'z-50'} onClick={()=> setActive([])}>Clear</button>
//      <div className={`yid-sidebar-content parent-${Array.isArray(active) && active.length === 0 ? "show":"hide"}`}>
//        <pre>{JSON.stringify(active,null,2)}</pre>
//        {
//          menu.map((item,index)=> (
//            <div className={'yid-sidebar-item'} key={item?.key}>
//              {
//                Array.isArray(item?.subMenu) && item?.subMenu.length > 0 ?
//                  <SubFolder {...item} level={1} onClick={()=> onActive({key:item?.key,label:item?.label},item?.subMenu ?? [])}/>
//                  :
//                  <SingleFolder {...item}/>
//              }
//
//            </div>
//          ))
//        }
//      </div>
//
//      <div className={`yid-sidebar--content-submenu submenu-${Array.isArray(active) && active.length > 0 ? "show":"hide"}`}>
//        <div className={`yid-sidebar-content`}>
//          {
//            active.slice(active.length - 1).map((item,index)=> (
//              //@ts-ignore
//              <div>
//                {
//                  Object.entries(item).map(([keys,child]) => (
//                    Array.isArray(child) && child.length > 0 ?
//                      child.map((cval)=> (
//                        <div className={'yid-sidebar-item'} key={cval?.key}>
//                          {
//                            Array.isArray(cval?.subMenu) && cval?.subMenu.length > 0 ?
//                              //@ts-ignore
//                              <SubFolder {...cval} level={1} onClick={()=> onActive({key:cval?.key,label:cval?.label},cval?.subMenu ?? [])}/>
//                              :
//                              <SingleFolder {...cval}/>
//                          }
//
//                        </div>
//                      )):<SingleFolder {...child}/>
//                  ))
//                }
//              </div>
//            ))
//          }
//        </div>
//      </div>
//    </aside>
//   );
// }
//
// export default SidebarDashboard;