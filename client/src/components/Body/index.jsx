import React from 'react'
import './body.css'

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';

import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';

const Body = ({changeLanguage}) => {
  const { t } = useTranslation();

  return (
    <div id='body'> 
      <div className='row'>
        <h3 id='latestArticles'>{t('latest_articles')}</h3>
        <h4>{t('article_1_title')}</h4>
        <div className='topic-img col-xs-12 col-lg-6' style={{marginBottom: '1rem'}}>    
           <img className='img-fluid' src={img2}/>
        </div>
        <div className='topic-text col-xs-12 col-lg-6' >
            <div className='text' style={{fontSize: '1.3rem'}}>
            {t('article_1_text_1')}&nbsp;
            <a href='#'>{t('read_more')}</a>
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
            <a href='#'>{t('read_more')}</a>
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
            <a href='#'>{t('read_more')}</a>
            </div>
        </div>
        <hr/>
        <button type="button" className="buttonBody" style={{marginTop: '1rem'}}><Link className='bodyLink' to='/articles'>{t('more_articles')}</Link></button>
        <h3 id='latestArticles' style={{marginBottom: '2rem'}}>{t('space_gallery')}</h3>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img5}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img6}/>
        </div>
        <hr/>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img7}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img-fluid' style={{marginBottom: '1rem'}} src={img1}/>
        </div>
        <hr/>
        <button type="button" className="buttonBody"><Link className='bodyLink' to='/galleries'>{t('more_images')}</Link></button>
      </div>
    </div>
  )
}

export default Body
