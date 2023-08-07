import React, { Component } from 'react';

function ItemMenuSidebar(props: any)  {
  return (
   <div>
    <pre>{JSON.stringify(props,null,2)}</pre>
   </div>
  );
}

export default ItemMenuSidebar;