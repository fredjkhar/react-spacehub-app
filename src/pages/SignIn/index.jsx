import React from 'react'
import './signin.css'

import { Navbar } from 'react-bootstrap';
import Video from '../../components/assets/header_vid.mp4';

import { Link } from 'react-router-dom';

import Footer from '../../components/Footer'

import Gmail from '../../components/assets/gmail.png'
import GitHub from '../../components/assets/github.png'
import Facebook from '../../components/assets/facebook.png'

const SignIn = () => {
  return (
    <>
      <video autoPlay loop className='video'>
      <source src={Video} type="video/mp4"/>
      </video>
      <Navbar className='navbar' expand="lg">
        <div className='container-fluid'>
          <Navbar.Brand href="#home"><h1>SpaceHub</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className='navbar-links'>
            <li><Link to='/'>Home</Link></li>
              <li><Link to='/articles'>Articles</Link></li>
              <li><Link to='galleries'>Galleries</Link></li>
              <li>/</li>
              <li><Link to='signup'>Sign up</Link></li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="login container-fluid">
        <div className="wrapper">
          <div className="left">
            <div className="loginButton gmail">
              <img id='' src={Gmail} style={{width: '40px', height: '40px'}}></img>
              Gmail
              
            </div>
            <div className="loginButton facebook">
              <img src={Facebook} style={{width: '40px', height: '40px'}}></img>
              Facebook
            </div>
            <div className="loginButton github">
              <img src={GitHub} style={{width: '40px', height: '40px'}}></img>
              Github
            </div>
          </div>
          <div className="center">
            <div className="line"></div>
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type='text' placeholder='Username'></input>
            <input type='text' placeholder='Password'></input>
            <button>SignIn</button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default SignIn
