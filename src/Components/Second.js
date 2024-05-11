import React, { useState } from 'react'

function Second({data,place}) {
  const [users, setUsers] = useState([
    {name:'anu',place:'kochi'},
    {name:'amal',place:'kochi'},
    {name:'kamal',place:'kochi'}
  ])
  return (
    <>
      <div>Second {data} {place}</div>
  
      <ul>
        {users.map(i=>
         <>
            <li>name: {i.name}, place:{i.place}</li>
            <h2>Heading</h2>
         </>
        )}
      </ul>
    </>
  )
}

export default Second