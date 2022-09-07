import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.isLoaded ? 'Connected' : 'Not Connected'}</h1>
    </div>
  )
}

export default UserData