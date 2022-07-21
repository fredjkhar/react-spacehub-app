import React, { useState } from 'react'
import './galleries.css'

import Footer from '../../components/Footer'

import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from '../../components/assets/user.png';

import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from "react-i18next";

import {Button, TextField, Typography} from '@mui/material'

import img2 from '../../components/assets/img2.jpg';
import img8 from '../../components/assets/img8.jpg';
import img3 from '../../components/assets/img3.jpg';
import img9 from '../../components/assets/img9.jpg';
import img5 from '../../components/assets/img5.jpg';
import img6 from '../../components/assets/img6.jpg';
import img7 from '../../components/assets/img7.jpg';
import img1 from '../../components/assets/img1.jpg';
import img4 from '../../components/assets/img4.jpg';
import img10 from '../../components/assets/img10.jpg';
import img11 from '../../components/assets/img11.jpg';
import img12 from '../../components/assets/img12.jpg';
import img13 from '../../components/assets/img13.jpg';
import img14 from '../../components/assets/img14.jpg';

const Galleries = ({user, changeLanguage}) => {

  const { t } = useTranslation();
  
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  const [state, setState] = useState([]);
  const [index, setIndex] = useState(0);
  var array = state;
  const fileSelectedHandler = event => {
    array = state;
    array.push({
      selectedFile: event.target.files[0],
      id: index
    });
    console.log(event.target.files[0])

  }

  const fileUploadHandler = () => {
    setState(array);
    setIndex(index + 1);
  }
  return (
    <div>
       {user ?    (    
              <Navbar className='navbar-articles' expand="lg">
                <div className='container-fluid'>
                  <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <ul className='navbar-links'>
                      <li><Link onClick={changeLanguage}>{t('language')}</Link></li>
                      <li><Link to='/'>{t('home')}</Link></li>
                      <li><Link to='/articles'>{t('articles')}</Link></li>
                      <li><Link to='/faq'>FAQ</Link></li>
                      <li>
                        <Dropdown>
                          <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            {user.displayName}
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
              <Navbar className='navbar-articles'  expand="lg">
              <div className='container-fluid'>
                <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul className='navbar-links'>
                  <li><Link onClick={changeLanguage}>{t('language')}</Link></li>
                    <li><Link to='/'>{t('home')}</Link></li>
                    <li><Link to='/articles'>{t('articles')}</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/signin'>{t('sign_in')}</Link></li>
                    <li style={{color: 'white'}}>/</li>
                    <li><Link to='signup'>{t('sign_up')}</Link></li>
                  </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>
        )}
        <div className='images'>
          <div className='row'>
          <h3 style={{textAlign: 'center', fontSize: '2.5rem', paddingBottom: '2rem'}}>{t('space_gallery')}</h3>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img14}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img13}/>
        </div>
        <hr/>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img11}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img1}/>
        </div>
        <hr/>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img9}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img8}/>
        </div>
        <hr/>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img7}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img6}/>
        </div>
        <hr/>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img5}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img4}/>
        </div>
        <hr/>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img3}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img2}/>
        </div>
        <hr/>
        {state && state.map(file => {
          return (
            <div key={file.id}>
              <div className='col-xs-12 col-md-6'>
              <img className='img-fluid' style={{marginBottom: '1rem'}} src={URL.createObjectURL(new Blob([file.selectedFile], {type: "image/jpeg"}))}/>
              </div>
              <hr/>
            </div>
          )
        })}
        <button type="button" className="buttonBody container-fluid"><Link className='bodyLink' to='/'>{t('back_to_home')}</Link></button>
        <h5 style={{fontSize: '1.5rem', paddingLeft: '2rem', textAlign: 'center'}}>{t('upload_image')}</h5>
        <div className='container-fluid' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0'}}>
          <input type="file" style={{fontSize: '1.3rem', border: '1px solid black'}} onChange={fileSelectedHandler}></input></div>
          <Button style={{marginTop: '10px'}} fullWidth disabled={false} variant="contained" onClick={fileUploadHandler}>
                Upload
            </Button>
          </div>
        </div>


        

      <Footer/>
    </div>
  )
}

export default Galleries
