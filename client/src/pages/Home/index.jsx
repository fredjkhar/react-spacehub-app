import React from 'react'

import Header from '../../components/Header'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

const Home = ({user, changeLanguage}) => {
  return (
    <>
      <Header user = {user} changeLanguage = {changeLanguage}/>
      <Body changeLanguage = {changeLanguage}/>
      <Footer changeLanguage = {changeLanguage}/>
    </>
  )
}

export default Home
