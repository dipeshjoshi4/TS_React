import React from 'react'
import useTodos from '../../hooks/useTodos'
import Loader from '../Common/Loader'


const Sales = () => {

  const { data: todos, isLoading, error } = useTodos()

  return (
    <>
      <h3>Todos Page</h3>
      {isLoading && <Loader />}
      {error && <em>{error.message}</em>}
      {todos?.map((todo) => {
        <p key={todo.id}>{todo.title}</p>
      })}

    </>
  )
}

export default Sales
