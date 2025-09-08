import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const UserAuth = (WrapperComponent) => {

  const AuthWrapper = (props) => {   //instead of return = (props) => {} => just to rid of warning of useEffect cant use in callback

    console.log(WrapperComponent) //for just rid of warning 

    const navigate = useNavigate()
    const isAuth = true

    useEffect(() => {
      console.log("User Authentication", isAuth)
      if (!isAuth) {
        navigate("/")

      }
    }, [isAuth, navigate])

    return isAuth ? <WrapperComponent {...props} hoc="hocValue" /> : null

  }
  return AuthWrapper
}

export default UserAuth