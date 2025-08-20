import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProducts = () => {

  // const params = useParams();
  // console.log(params)

  const { id } = useParams();

  return (
    <div>
      <h2>SingleProducts-{id}</h2>
    </div>
  )
}

export default SingleProducts