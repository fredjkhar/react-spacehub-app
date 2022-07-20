import React, {useEffect} from 'react'
import './articles.css'

import Footer from '../../components/Footer'

import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';

import img2 from '../../components/assets/img2.jpg';
import img3 from '../../components/assets/img3.jpg';
import img4 from '../../components/assets/img4.jpg';
import img12 from '../../components/assets/img12.jpg';
import img13 from '../../components/assets/img13.jpg';
import img14 from '../../components/assets/img14.jpg';

import { useTranslation } from "react-i18next";


const Articles = ({user, changeLanguage, setArticles}) => {
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
                    <li><Link to='/'>{t('home')}</Link></li>
                    <li><Link to='galleries'>{t('galleries')}</Link></li>
                    <li><Link to='/signin'>{t('sign_in')}</Link></li>
                    <li>/</li>
                    <li><Link to='signup'>{t('sign_up')}</Link></li>
                  </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>
        )}
      <div className='Articles'>
        <div className='row'>
          <h3 id='latestArticles'>Articles</h3>
          <h4>{t('article_1_title')}</h4>
          <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>    
            <img className='img-fluid' src={img2}/>
          </div>
          <div className='topic-text col-xs-12 col-lg-6'>
              <div className='text' style={{fontSize: '1.3rem'}}>
              {t('article_1_text_1')}&nbsp;
              <Link id='1' to='/article' onClick={() => {setArticles(1)}}>{t('read_more')}</Link>
              </div>
          </div>
          <hr/>
          <h4>{t('article_2_title')}</h4>
          <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>
                  <img className='img-fluid' src={img3}/>
          </div>
          <div className='topic-text col-xs-12 col-lg-6'>
              <div className='text' style={{fontSize: '1.3rem'}}>
              {t('article_2_text_1')}&nbsp;
              <Link id='2' to='/article' onClick={() => {setArticles(2)}}>{t('read_more')}</Link>
              </div>
          </div>
          <hr/>
          <h4>{t('article_3_title')}</h4>
          <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>
                  <img className='img-fluid' src={img4}/>
          </div>
          <div className='topic-text col-xs-12 col-lg-6'>
              <div className='text' style={{fontSize: '1.3rem'}}>
              {t('article_3_text_1')}&nbsp;
              <Link id='3' to='/article' onClick={() => {setArticles(3)}}>{t('read_more')}</Link>
              </div>
          </div>
          <hr/>
          <h4>{t('article_4_title')}</h4>
          <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>
                  <img className='img-fluid' src={img13}/>
          </div>
          <div className='topic-text col-xs-12 col-lg-6'>
              <div className='text' style={{fontSize: '1.3rem'}}>
              {t('article_1_text_1')}.&nbsp;
              <Link id='4' to='/article' onClick={() => {setArticles(4)}}>{t('read_more')}</Link>
              </div>
          </div>
          <hr/>
          <h4>{t('article_5_title')}</h4>
          <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>
                  <img className='img-fluid' src={img12}/>
          </div>
          <div className='topic-text col-xs-12 col-lg-6'>
              <div className='text' style={{fontSize: '1.3rem'}}>
              {t('article_2_text_1')}&nbsp;
              <Link id='5' to='/article' onClick={() => {setArticles(5)}}>{t('read_more')}</Link>
              </div>
          </div>
          <hr/>
          <h4>{t('article_6_title')}</h4>
          <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>
                  <img className='img-fluid' src={img14}/>
          </div>
          <div className='topic-text col-xs-12 col-lg-6'>
              <div className='text' style={{fontSize: '1.3rem'}}>
              {t('article_3_text_1')}&nbsp;
              <Link id='6' to='/article' onClick={() => {setArticles(6)}}>{t('read_more')}</Link>
              </div>
          </div>
          <hr/>
          <button type="button" className="buttonBody container-fluid"><Link className='bodyLink' to='/'>{t('back_to_home')}</Link></button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Articles
