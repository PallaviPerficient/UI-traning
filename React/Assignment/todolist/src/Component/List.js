import React from 'react'

const List = (props) => {
    console.log("props",props);
    
  return (
    <div>{props.name}</div>
  )
}

export default List