import {sidebarMenuProps} from "@yuyuid/src/configs/sidebar.menu";

export * from './uuid'
export function getEnv(environment: string,permit?: string | 'private'){
  switch (permit){
    case "private":
      return process.env[environment] ?? null
    case "public":
      return process.env[['NEXT_PUBLIC',environment].join('_')] ?? null
    default:
      return null
  }
}
interface MapMenuParentProps {
  menus: sidebarMenuProps[],
  attributes?:string,
  [key:string | number]: any
}
export const MapMenuParent = function(props: MapMenuParentProps){
  let { menus, attributes = 'children'} = props
  let menuMap = {}

  menus.forEach(menu => {
    const { id, label, parent,path,icon } = menu;
    if (!parent) {
      // If the menu has no parent, add it to the top-level menuMap
      // @ts-ignore
      menuMap[id] = { id, label, [attributes]: [],parent,path };
    } else {
      // If the menu has a parent, add it as a child to the parent's entry in menuMap
      // @ts-ignore
      if (!menuMap[parent]) {
        // If the parent is not in the menuMap, add it first
        // @ts-ignore
        menuMap[parent] = { id: parent, [attributes]: [],path,icon };
      }
      // @ts-ignore
      menuMap[parent][attributes].push({ id, label,path,icon,[attributes]:[] });
    }
  });
  console.log(Object.values(menuMap),'MENUS')
  // Convert the menuMap object to an array of top-level categories
  // @ts-ignore
  return Object.values(menuMap)
}