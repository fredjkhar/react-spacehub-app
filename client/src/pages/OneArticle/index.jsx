import React from 'react'
import './onearticle.css'

import { useTranslation } from "react-i18next";

import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';

import img2 from '../../components/assets/img2.jpg';
import img8 from '../../components/assets/img8.jpg';

import img3 from '../../components/assets/img3.jpg';
import img9 from '../../components/assets/img9.jpg';

import img4 from '../../components/assets/img4.jpg';
import img10 from '../../components/assets/img10.jpg';
import img11 from '../../components/assets/img11.jpg';
import img12 from '../../components/assets/img12.jpg';
import img13 from '../../components/assets/img13.jpg';
import img14 from '../../components/assets/img14.jpg';

import CommentSection from '../../components/CommentSection'

import Footer from '../../components/Footer'




const OneArticle = ({user, changeLanguage, article}) => {

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
                    <li><Link to='galleries'>{t('galleries')}</Link></li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                          {user.displayName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="" style={{color: 'black'}} onClick= {logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li><Link to=''> <img src={user.photos[0].value} style={{width: '30px'}}/></Link></li>
                  </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>
      ):(
            <Navbar className='navbar-articles' expand="lg">
            <div className='container-fluid'>
              <Navbar.Brand href="/"><h1>SpaceHub</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className='navbar-links'>
                  <li><Link onClick={changeLanguage}>{t('language')}</Link></li>
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
        <div className='article-section'> 
            <div className='one-article'>
                {article === 1 && 
                    <div>
                        <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem'}}>{t('article_1_title')}</h4></div>
                        <img className='img-fluid article-img' src={img2}></img>
                        <div className='article-subtitle'>{t('article_1_subtitle')}</div>
                        <div className='article-text'>{t('article_1_text_1')}</div>
                        <div className='article-text'>{t('article_1_text_2')}</div>
                        <div className='article-text'>{t('article_1_text_3')}</div>
                        <div className='article-text'>{t('article_1_text_4')}</div>
                        <div className='article-text'>{t('article_1_text_5')}</div>
                        <div className='article-text'>{t('article_1_text_6')}</div>
                        <div className='article-text'>{t('article_1_text_7')}</div>
                        <img className='img-fluid article-img' src={img8}></img>
                        <div className='article-text'>{t('article_1_text_8')}</div>
                        <div className='article-text'>{t('article_1_text_9')}</div>
                        <div className='article-text'>{t('article_1_text_10')}</div>
                        <div className='article-text'>{t('article_1_text_11')}</div>
                        <div className='article-text'>{t('article_1_text_12')}</div>
                    </div>
                }
                {article === 2 && 
                    <div>
                        <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem'}}>{t('article_2_title')}</h4></div>
                        <img className='img-fluid article-img' src={img3}></img>
                        <div className='article-subtitle'>{t('article_2_subtitle')}</div>
                        <div className='article-text'>{t('article_2_text_1')}</div>
                        <div className='article-text'>{t('article_2_text_2')}</div>
                        <div className='article-text'>{t('article_2_text_3')}</div>
                        <div className='article-text'>{t('article_2_text_4')}</div>
                        <img className='img-fluid article-img' src={img9}></img>
                        <div className='article-text'>{t('article_2_text_5')}</div>
                        <div className='article-text'>{t('article_2_text_6')}</div>
                        <div className='article-text'>{t('article_2_text_7')}</div>
                        <div className='article-text'>{t('article_2_text_8')}</div>
                    </div>
                }
                {article === 3 && 
                    <div>
                        <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem'}}>{t('article_3_title')}</h4></div>
                        <div className='article-img'><img className='img-fluid align-center' src={img4}></img></div>
                        <div className='article-subtitle'>{t('article_3_subtitle_1')}</div>
                        <div className='article-text'>{t('article_3_text_1')}</div>
                        <div className='article-text'>{t('article_3_text_2')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_2')}</div>
                        <div className='article-text'>{t('article_3_text_3')}</div>
                        <div className='article-text'>{t('article_3_text_4')}</div>
                        
                        <div className='article-text'>{t('article_3_text_5')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_3')}</div>
                        <div className='article-text'>{t('article_3_text_6')}</div>
                        <div className='article-text'>{t('article_3_text_7')}</div>
                        
                        <div className='article-text'>{t('article_3_text_8')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_4')}</div>
                        <div className='article-text'>{t('article_3_text_9')}</div>
                        <img className='img-fluid article-img' src={img10}></img>
                        <div className='article-text'>{t('article_3_text_10')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_5')}</div>
                        <div className='article-text'>{t('article_3_text_11')}</div>
                        <div className='article-text'>{t('article_3_text_12')}</div>
                        <img className='img-fluid article-img' src={img11}></img>
                        <div className='article-text'>{t('article_3_text_13')}</div>
                    </div>
                }
                {article === 4 && 
                    <div>
                        <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem'}}>{t('article_4_title')}</h4></div>
                        <img className='img-fluid article-img align-center' src={img12}></img>
                        <div className='article-subtitle'>{t('article_1_subtitle')}</div>
                        <div className='article-text'>{t('article_1_text_1')}</div>
                        <div className='article-text'>{t('article_1_text_2')}</div>
                        <div className='article-text'>{t('article_1_text_3')}</div>
                        <div className='article-text'>{t('article_1_text_4')}</div>
                        <div className='article-text'>{t('article_1_text_5')}</div>
                        <div className='article-text'>{t('article_1_text_6')}</div>
                        <div className='article-text'>{t('article_1_text_7')}</div>
                        <img className='img-fluid article-img' src={img8}></img>
                        <div className='article-text'>{t('article_1_text_8')}</div>
                        <div className='article-text'>{t('article_1_text_9')}</div>
                        <div className='article-text'>{t('article_1_text_10')}</div>
                        <div className='article-text'>{t('article_1_text_11')}</div>
                        <div className='article-text'>{t('article_1_text_12')}</div>
                    </div>
                }
                {article === 5 && 
                    <div>
                        <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem'}}>{t('article_5_title')}</h4></div>
                        <img className='img-fluid article-img align-center' src={img13}></img>
                        <div className='article-subtitle'>{t('article_2_subtitle')}</div>
                        <div className='article-text'>{t('article_2_text_1')}</div>
                        <div className='article-text'>{t('article_2_text_2')}</div>
                        <div className='article-text'>{t('article_2_text_3')}</div>
                        <div className='article-text'>{t('article_2_text_4')}</div>
                        <img className='img-fluid article-img' src={img9}></img>
                        <div className='article-text'>{t('article_2_text_5')}</div>
                        <div className='article-text'>{t('article_2_text_6')}</div>
                        <div className='article-text'>{t('article_2_text_7')}</div>
                        <div className='article-text'>{t('article_2_text_8')}</div>
                    </div>
                }
                {article === 6 && 
                    <div>
                        <div className='article-title'><h4 className='align-center' style={{fontSize: '2rem'}}>{t('article_6_title')}</h4></div>
                        <div className='article-img'><img className='img-fluid align-center' src={img14}></img></div>
                        <div className='article-subtitle'>{t('article_3_subtitle_1')}</div>
                        <div className='article-text'>{t('article_3_text_1')}</div>
                        <div className='article-text'>{t('article_3_text_2')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_2')}</div>
                        <div className='article-text'>{t('article_3_text_3')}</div>
                        <div className='article-text'>{t('article_3_text_4')}</div>
                        
                        <div className='article-text'>{t('article_3_text_5')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_3')}</div>
                        <div className='article-text'>{t('article_3_text_6')}</div>
                        <div className='article-text'>{t('article_3_text_7')}</div>
                        
                        <div className='article-text'>{t('article_3_text_8')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_4')}</div>
                        <div className='article-text'>{t('article_3_text_9')}</div>
                        <img className='img-fluid article-img' src={img10}></img>
                        <div className='article-text'>{t('article_3_text_10')}</div>
                        <div className='article-subtitle'>{t('article_3_subtitle_5')}</div>
                        <div className='article-text'>{t('article_3_text_11')}</div>
                        <div className='article-text'>{t('article_3_text_12')}</div>
                        <img className='img-fluid article-img' src={img11}></img>
                        <div className='article-text'>{t('article_3_text_13')}</div>
                    </div>
                }
                <button type="button" className="buttonBody container-fluid"><Link className='bodyLink' to='/articles'>{t('back_to_articles')}</Link></button>
                <CommentSection user = {user} changeLanguage = {changeLanguage}/>
            </div>

        </div>
        
        
        <Footer/>
        
      
    </div>
  )
}

export default OneArticle
