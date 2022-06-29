import React from 'react';
import './navbar.css';

import { Navbar } from 'react-bootstrap';
import Video from '../assets/header_vid.mp4';
import Profile from '../assets/user.png';

import { Link } from 'react-router-dom';


const Header = ({user}) => {
  return (
    <div className='header'>
      <video autoPlay loop className='video'>
      <source src={Video} type="video/mp4"/>
      </video>
      {user ?    (    
            <Navbar className='navbar' expand="lg">
              <div className='container-fluid'>
                <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul className='navbar-links'>
                    <li><Link to='/articles'>Articles</Link></li>
                    <li><Link to='galleries'>Galleries</Link></li>
                    <li><Link to='galleries'>{user.displayName}</Link></li>
                    <li><img src={Profile} style={{width: '30px'}}/></li>
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
                  <li><Link to='/articles'>Articles</Link></li>
                  <li><Link to='galleries'>Galleries</Link></li>
                  <li><Link to='/signin'>Sign in</Link></li>
                  <li>/</li>
                  <li><Link to='signup'>Sign up</Link></li>
                </ul>
              </Navbar.Collapse>
            </div>
          </Navbar>
      )}

      <div className='subHeader'>
        <h2>A space for those who look up to the stars and dream</h2>
        <a id='read-more' href='#body'>Read more</a>
      </div>
      
    </div> 
  )
}

export default Header
