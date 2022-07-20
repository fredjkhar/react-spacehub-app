import React from 'react'
import './footer.css'

import { useTranslation } from "react-i18next";

const Footer = ({changeLanguage}) => {

  const { t } = useTranslation();

  return (
    <>
      <div className='container-empty'/>
      <div id='copyright'>&copy; 2022 Copyright: SpaceHub</div>
    </>
  )
}

export default Footer
