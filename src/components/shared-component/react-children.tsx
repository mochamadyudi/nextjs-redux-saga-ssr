import React, {ReactElement} from 'react'

type PropsFunctionComponent = {

}
type PropsComponentChildren = {
  children: ReactElement | React.FunctionComponent<any>
}
export const ComponentChildren: React.FC<PropsComponentChildren> = props => {
  let { children } = props
  return !children ? '':(
    React.Children.map(children, (child:any, i) => {
      console.log({child})
        return child !== null && typeof(child) !== 'string' ? (
          React.cloneElement(child, {
            ...child.props,
            key: child,
            className: child?.props?.className ?? ''
          })
        ): child !== null ? child: ''
      }

    )
  )
}