export interface sidebarMenuProps {
  id:number,
  label: string,
  parent: null | number | undefined,
  icon?: any,
  path: string,
  order?: number
}

function DPath(path:string){
  return ['/dashboard',path].join('')
}

const sidebarMenu:sidebarMenuProps[] = [
  {
    id:1,
    label:"Dashboard",
    parent: null,
    path: DPath('/'),
    icon:null,
    order:0
  },
  {
    id:2,
    label:"Settings",
    parent: null,
    path: DPath('/settings'),
    icon:null,
    order:0
  },
  {
    id:3,
    label:"Account",
    parent: 2,
    path: DPath('/settings/account'),
    icon:null,
    order:0
  },
  {
    id:4,
    label:"Change Password",
    parent: 2,
    path: DPath('/settings/change-password'),
    icon: null,
    order:1
  },
  {
    id:5,
    label:"Change Email",
    parent: 2,
    path: DPath('/settings/change-password'),
    icon:null,
    order:1
  },
  {
    id:7,
    label:"Analytics",
    parent: null,
    path: DPath('/analytics'),
    icon:null,
    order:1
  },
  {
    id:8,
    label:"Sales",
    parent: 7,
    path: DPath('/analytics/sales'),
    icon:null,
    order:1
  },
]

export default sidebarMenu