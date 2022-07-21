import React from 'react';
import './navbar.css';

import { Navbar } from 'react-bootstrap';
import Video from '../assets/header_vid.mp4';
import { useTranslation } from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';

import { UserAuth } from '../../contexts/AuthContext';




import { Link } from 'react-router-dom';



const Header = ({user, changeLanguage}) => {
  
  const { t } = useTranslation();

  const { signout } = UserAuth();

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    try {
      signout();
    } catch (e) {
      console.log(e.message)
    }
    
  };

  

  return (
    <div className='header'>
      <video autoPlay loop className='video'>
      <source src={Video} type="video/mp4"/>
      </video>
      {user ?    (    
            <Navbar className='navbar' expand="lg">
              <div className='container-fluid'>
                <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul className='navbar-links'>
                    <li><Link onClick={changeLanguage}>{t('language')}</Link></li>
                    <li><Link to='/articles'>{t('articles')}</Link></li>
                    <li><Link to='galleries'>{t('galleries')}</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                          {user.displayName || user.email}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="" style={{color: 'black'}} onClick= {logout}>{t('sign_out')}</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li><Link to=''> <img src={user.photos[0].value} style={{width: '30px'}}/></Link></li>
                  </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>
      ):(
            <Navbar className='navbar' expand="lg">
            <div className='container-fluid'>
              <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className='navbar-links'>
                  <li><Link onClick={changeLanguage}>{t('language')}</Link></li>
                  <li><Link to='/articles'>{t('articles')}</Link></li>
                  <li><Link to='galleries'>{t('galleries')}</Link></li>
                  <li><Link to='/faq'>FAQ</Link></li>
                  <li><Link to='/signin'>{t('sign_in')}</Link></li>
                  <li style={{color: 'white'}}>/</li>
                  <li><Link to='signup'>{t('sign_up')}</Link></li>
                </ul>
              </Navbar.Collapse>
            </div>
          </Navbar>
      )}

      <div className='subHeader'>
        <h2>{t('subHeader')}</h2>
        <a id='read-more' href='#body'>{t('read_more')}</a>
      </div>
      
    </div> 
  )
}

export default Header
