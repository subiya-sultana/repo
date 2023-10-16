import React from 'react';
import homeBg from '../assets/homeBg.mp4';
import bgPosterImg from "../assets/bgPosterImg.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <header className="App-header section" id='home'>
        <video autoPlay muted loop src={homeBg} poster={bgPosterImg} type="video/mp4"/>
        <div className="overlay"></div>
        <div className="home-content" >
            <div className='home-left' data-aos="fade-down-right" data-aos-duration="2000"> 
                <h1 >Hello, I am <span  className='glitch'>Subiya Sultana.</span></h1>
                <h1 data-aos="fade-left" data-aos-duration="2000">And I build Interactive websites.</h1>
                <p>View My Work <FontAwesomeIcon className='icon' icon={faAngleDown} /></p>
            </div>
            <div className='home-right'>
         
              <button data-aos="flip-left" data-aos-duration="2000">Download Resume 
                <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              <button data-aos="flip-left" data-aos-duration="2000">Explore About Me 
                <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
            
            </div>
        </div>
        
      </header>
  )
}
