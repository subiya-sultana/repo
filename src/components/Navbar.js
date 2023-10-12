import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faPhoneVolume, faLaptopCode, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
export default function Navbars() {
  useEffect(() => {
    const listItems = document.querySelectorAll('.list');
    function handleItemClick(event) {
      listItems.forEach(item => item.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }
    listItems.forEach(item => item.addEventListener('click', handleItemClick));
    return () => {
      listItems.forEach(item => item.removeEventListener('click', handleItemClick));
    };
  }, []); 

  return (
    <nav>
      <ul>
        <li className='list active'>
          <a href='#'>
            <span className='icon'>
              <FontAwesomeIcon  icon={faHome} />
            </span>
            <span className='text'>Home</span>
          </a>
        </li>
        <li className='list'>
          <a href='#about'>
            <span className='icon'>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className='text'>About</span>
          </a>
        </li>
        <li className='list'>
          <a href='#education'>
            <span className='icon'>
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <span className='text'>Education</span>
          </a>
        </li>
        <li className='list'>
          <a href='#projects' >
            <span className='icon' >
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
            <span className='text'>Projects</span>
          </a>
        </li>
        <li className='list'>
          <a href='#contact'>
            <span className='icon' >
              <FontAwesomeIcon icon={faPhoneVolume} />
            </span>
            <span className='text'>Contact </span>
          </a>
        </li>  
        {/* <div className='marker'></div> */}
      </ul>        
    </nav>
  )
}
