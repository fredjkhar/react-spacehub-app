import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from "react-i18next";

import Footer from '../../components/Footer'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = ({ user, changeLanguage }) => {

    const { t } = useTranslation();

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };
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
                      <li><Link to='/galleries'>{t('galleries')}</Link></li>
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
                    <li><Link to='galleries'>{t('galleries')}</Link></li>
                    <li><Link to='/signin'>{t('sign_in')}</Link></li>
                    <li style={{color: 'white'}}>/</li>
                    <li><Link to='signup'>{t('sign_up')}</Link></li>
                  </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>
        )}
            <div className='article-section'>
            <div className='one-article'>
            <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem', textAlign: 'center'}}>FAQ</h4></div>
            <div style={{height:'950px'}}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">{t('q1')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          {t('a1')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">{t('q2')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          {t('a2')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">{t('q3')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          {t('a3')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">{t('q4')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          {t('a4')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">{t('q5')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          {t('a5')}
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>

        
            
            
        
            </div>
            </div>
            

        <Footer/>
      
    </div>
  )
}

export default FAQ
