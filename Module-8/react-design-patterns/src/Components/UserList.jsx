import React from 'react'
import "./userlist.css"

const UserList = ({ users, Loading, error }) => {
  if (Loading) return <div>Loading......</div>
  if (error) return <div>Something Went Wrong......</div>
  if (!users) return null
  return (
    <div className='userlist'>
      {
        users.length && users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>
                {user.email}
              </p>
            </div>
          )
        })
      }

    </div>
  )
}

export default UserList