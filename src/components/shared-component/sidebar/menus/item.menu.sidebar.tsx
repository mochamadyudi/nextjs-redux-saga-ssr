import React from 'react';

function ItemMenuSidebar(props:any)  {
  return (
   <div>
     <pre>ITEM</pre>
     <pre>{JSON.stringify(props,null,2)}</pre>
   </div>
  );
}

export default ItemMenuSidebar;