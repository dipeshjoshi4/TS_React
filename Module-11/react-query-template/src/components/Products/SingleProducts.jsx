import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const SingleProducts = () => {

  // const params = useParams();
  // console.log(params)

  const { id } = useParams();
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/Products/" + 3)
  }

  return (
    <div>
      <h2>SingleProducts-{id}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default SingleProducts