import React, { Component } from 'react';

interface AppProviderProps {
  mode?: string | 'default',
  children: React.ReactNode | undefined
}
export default class AppProvider extends Component<AppProviderProps>{
  componentDidMount() {
    if(typeof this.props.children === 'undefined'){
      // @ts-ignore
      throw new Error('Error: children is undefined')
    }
  }

  render() {
    return (
      <main className={'yid-main'}>
        {this.props.children}
      </main>
    )
  }
}