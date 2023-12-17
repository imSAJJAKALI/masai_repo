import React from 'react'

const Lists = ({todos}) => {
  return (
    <div data-testid="list-component" style={{ width: 'fit-content', margin: 'auto', textAlign: 'left'}}>
        <ul >
        {/* Map the todos here inside the ul tag, with the li items, showing just the todo title */}

        {todos?.map((e)=><li>{e.title}</li>)}
        </ul>
    </div>
  )
}

export default Lists