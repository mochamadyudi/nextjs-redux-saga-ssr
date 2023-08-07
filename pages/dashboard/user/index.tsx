import React, {Component} from 'react';
import {connect} from 'react-redux';
import Meta from "@yuyuid/src/components/meta";
import {wrapper} from "@yuyuid/src/redux/store";
import {getEnv} from "@yuyuid/utils";


interface PagesDashboardUserProps {
  head: {
    title?: string | null | undefined,
    description?: string | null | undefined,
    keyword?: string | null | undefined,
    [key: string | number]: any,
  }
}

const PagesDashboardUser: React.FC<PagesDashboardUserProps> = function ({head,...props}) {
  let {
    title,
    description,
    keyword
  } = head
  return (
    <div>
      <Meta
        title={title}
        description={description}
        keyword={keyword}
      />
      <h1>User</h1>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  // @ts-ignore
  (store) => async (ctx) => {
    //@ts-ignore
    return {
      props: {
        head: {
          title: ['USER', getEnv('TITLE', 'public')].join(' | '),
          description: getEnv('DESCRIPTION', 'public'),
          keyword: getEnv('KEYWORD', 'public'),
        }
      }
    }
  })
export default PagesDashboardUser;