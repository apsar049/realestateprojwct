import React from 'react'
import Api from './fetchapi'
import { LoginContext } from './ContextProvider/Context'
import { useNavigate } from 'react-router-dom'

import { useState, useContext, useEffect } from 'react'

import Header from './Header'
const Listing = () => {
  const { logindata, setLoginData } = useContext(LoginContext)

  const navigate = useNavigate()
  const [info, setInfo] = useState(false)
  const DashboardValid = async () => {
    let token = localStorage.getItem('usersdatatoken')

    const res = await fetch('/validuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    const recivedData = await res.json()

    if (recivedData.status == 401 || !recivedData) {
      navigate('/')
    } else {
      setLoginData(recivedData)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid()
      setInfo(true)
    }, 2000)
  }, [])
  return (
    <div>
      <Header />
      <Api />
    </div>
  )
}
export default Listing
