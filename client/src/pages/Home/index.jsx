import React from 'react'

import Header from '../../components/Header'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

const Home = ({user, changeLanguage, setUser}) => {
  return (
    <>
      <Header user = {user} changeLanguage = {changeLanguage}/>
      <Body changeLanguage = {changeLanguage} setUser = {setUser}/>
      <Footer changeLanguage = {changeLanguage}/>
    </>
  )
}

export default Home
