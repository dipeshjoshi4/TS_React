import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import Loader from '../Common/Loader'


const Sales = () => {
  const [userId, setUserId] = useState(null)
  
  const { data: todos, isLoading, error } = useTodos(userId)

  return (
    <>
      <select onChange={(e) => {
        setUserId(parseInt(e.target.value))
      }} value={userId}>
        <option value="">Select</option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
        <option value="4">user 4</option>
      </select>

      <h3>Todos Page</h3>
      {isLoading && <Loader />}
      {error && <em>{error.message}</em>}
      {todos?.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}

    </>
  )
}

export default Sales
