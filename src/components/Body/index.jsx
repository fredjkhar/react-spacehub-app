import React from 'react'
import './body.css'

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';

const Body = () => {
  return (
    <div id='body'> 
      <div className='row'>
        <h3 id='latestArticles'>Latest Articles</h3>
        <h4>Fastest-growing black hole ever seen is devouring the equivalent of 1 Earth per second</h4>
        <div className='topic-img col-xs-12 col-lg-6'>    
           <img className='img' src={img2}/>
        </div>
        <div className='topic-text col-xs-12 col-lg-6'>
            <div className='text'>
            A black hole is a place in space where gravity pulls so much that even light can not get out. 
            The gravity is so strong because matter has been squeezed into a tiny space. This can happen when a star 
            is dying. Because no light can get out, people can't see black holes. They are invisible. Space telescopes 
            with special tools can help find black holes. The special tools can see how stars that are very close 
            to black holes act differently Black holes can be big or small. Scientists think the smallest black holes are 
            as small as just one atom.&nbsp;
            <a href='#'>read more</a>
            </div>
        </div>
        <hr/>
        <h4>Marvel at the majestic galaxies in this classic Hubble telescope photo</h4>
        <div className='topic-img col-xs-12 col-lg-6'>
                <img className='img' src={img3}/>
        </div>
        <div className='topic-text col-xs-12 col-lg-6'>
            <div className='text'>
            For over three decades, the indefatigable Hubble Space Telescope has been providing stunning peeks into the 
            myriad mysteries of the universe, helping astronomers, physicists, and scientists of all stripes to understand 
            more about galaxies, exoplanets, moons and stars than ever before. Check out this classic galactic tableau 
            originally captured by the Hubble telescope in 2012 (NASA recently released it this month) to point out how 
            optical tricksof perspective can alter our conclusions about what appears to be the truth.&nbsp;
            <a href='#'>read more</a>
            </div>
        </div>
        <hr/>
        <h4>Gaia mission: 5 revealing insights from its latest data</h4>
        <div className='topic-img col-xs-12 col-lg-6'>
                <img className='img' src={img4}/>
        </div>
        <div className='topic-text col-xs-12 col-lg-6'>
            <div className='text'>
            The European Space Agency's (ESA) Gaia mission has just released new data. The Gaia satellite was launched in 
            2013, with the aim of measuring the precise positions of a billion stars. In addition to measuring the stars' 
            positions, speeds and brightness, the satellite has collected data on a huge range of other objects. There's a 
            lot to make astronomers excited(opens in new tab). Here are five of our favorite insights that the data might 
            provide.&nbsp;
            <a href='#'>read more</a>
            </div>
        </div>
        <button type="button" class="buttonBody">More Articles</button>
        <h3 id='latestArticles'>Space Gallery</h3>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img' src={img5}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img' src={img6}/>
        </div>
        <div className='gallery-img-left col-xs-12 col-md-6'>
        <img className='img' src={img7}/>
        </div>
        <div className='gallery-img-right col-xs-12 col-md-6'>
        <img className='img' src={img1}/>
        </div>
        <button type="button" class="buttonBody">More Photos</button>
      </div>
    </div>
  )
}

export default Body
