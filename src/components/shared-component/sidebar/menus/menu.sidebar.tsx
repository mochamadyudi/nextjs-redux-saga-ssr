import React, {ReactElement, ReactNode, ReactNodeArray} from 'react'
import ItemMenuSidebar from "@yuyuid/src/components/shared-component/sidebar/menus/item.menu.sidebar";
import {ComponentChildren} from "@yuyuid/src/components/shared-component/react-children";
import GroupMeuSidebar from "@yuyuid/src/components/shared-component/sidebar/menus/group.meu.sidebar";

type ChildrenFunctionalElement = {
  state: object | any,
  setState?: Function
}
type MenuSidebarProps = {
  children: ReactElement | React.FunctionComponent<ChildrenFunctionalElement> | ReactElement[] | any
}
type MenuSidebarState = {

}
export default class MenuSidebar extends React.Component<MenuSidebarProps,MenuSidebarState>{
  state: MenuSidebarState = {}
  constructor(props: MenuSidebarProps) {
    super(props);
  }

  static Item = ItemMenuSidebar

  static Group = GroupMeuSidebar


  render() {
    return (
      <div {...this.props} className={'app-menu sidebar'} id={'app-menu-sidebar'} aria-label={'sidebar'} role={'navigation'}>
        <ComponentChildren {...this.props} children={this.props.children}/>
      </div>
    )
  }
}