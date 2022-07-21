import React, {useState} from 'react'
import './signin.css'

import { Navbar } from 'react-bootstrap';
import Video from '../../components/assets/header_vid.mp4';

import { Link, useHistory  } from 'react-router-dom';

import Footer from '../../components/Footer'

import Gmail from '../../components/assets/gmail.png'
import GitHub from '../../components/assets/github.png'
import { Form, Button, Card, Alert } from "react-bootstrap"

import { useTranslation } from "react-i18next";

import { UserAuth } from '../../contexts/AuthContext';

import img from '../../components/assets/user.png'

const SignIn = ({setUser, changeLanguage}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {signin} = UserAuth();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signin(email, password)
      const user = {
        email: email,
        photos: [{value: img}]
      }
      setUser(user);
      history.push("/")
    } catch (e) {
      setError(e.message);
      console.log(e.message)
    }
  }

  const { t } = useTranslation();

  const google = ()=> {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  const github = ()=> {
    window.open("http://localhost:5000/auth/github", "_self")
  }
  return (
    <>
      <video autoPlay loop className='video'>
      <source src={Video} type="video/mp4"/>
      </video>
      <Navbar className='navbar' expand="lg">
        <div className='container-fluid'>
          <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className='navbar-links'>
            <li><Link onClick={changeLanguage}>{t('language')}</Link></li>
              <li><Link to='/'>{t('home')}</Link></li>
              <li><Link to='/articles'>{t('articles')}</Link></li>
              <li><Link to='galleries'>{t('galleries')}</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
              <li><Link to='signup'>{t('sign_up')}</Link></li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="login container-fluid ">
        <div className="wrapper">
          <div className="left">
            <div><h3 style={{textAlign: 'center'}}>{t('sign_in')}</h3></div>
            <div className="loginButton gmail" onClick={google}>
              <img id='' src={Gmail} style={{width: '40px', height: '40px'}}></img>
              Gmail
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={GitHub} style={{width: '40px', height: '40px'}}></img>
              Github
            </div>
          </div>
          <div className="center">
            <div className="line"></div>
            <div className="or">{t('or')}</div>
          </div>
          <div className="right">
          {error && <Alert variant="danger">{t('wrong')}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>{t('password')}</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <Button className="w-100 mt-4" type="submit">
              {t('sign_in')}
              </Button>
            </Form>
            <div className="w-100 text-center mt-2">
            {t('dont_have_an_account')} 
            <Link to="/signUp">{t('sign_up')}</Link>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default SignIn
