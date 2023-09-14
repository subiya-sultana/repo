import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faWordpress, faSass } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className='skills'>
            <pre className='sub-title'>&lt; Skills /&gt;</pre>
            <h1 className='glitch title'>WHAT I USE?</h1>
            
            <div className='tab'>
                <div> Frontend </div>
                <div> Backend </div>
                <div> tools </div>
                <div> other </div>
            </div>
            <div className='container'>
                <div className='frontend'>
                    {/* <h1>Frontend Skills</h1> */}
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faHtml5} />
                        <p>HTML5</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faCss3Alt} />
                        <p>CSS3</p>
                    </div>
                    
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faSass} />
                        <p>Sass</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faCode} />
                        <p>Tailwind</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faJs} />
                        <p>JS</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faReact} />
                        <p>React</p>
                    </div>
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faCode} />
                        <p>JQuery</p>
                    </div>
                    
                    <div className='skill'>
                        <FontAwesomeIcon className='icon' icon={faWordpress} />
                        <p>Wordpress</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
