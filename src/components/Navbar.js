import React from 'react';
// import './nav.css'

import { useState } from 'react';

export default function Navbars() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#Home" onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : '' } >home</a>
        <a href="#Skills"  onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : '' } >skills</a>
        <a href="#Services"  onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : '' } >service</a>
        <a href="#Contact"  onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : '' } >contact</a>
        
    </nav>
  )
}
