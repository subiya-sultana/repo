import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faWordpress, faSass } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    function switchTab(event, tabName) {
        const tab = document.getElementsByClassName("tab");
        const tabBody = document.getElementsByClassName("tab-body");
        for (let i = 0; i < tab.length; i++) {
            tab[i].className = tab[i].className.replace(" selected-tab", " ");
        }
        for (let i = 0; i < tabBody.length; i++) {
            tabBody[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " selected-tab";
    }
    // document.querySelector('.tab').click();
    return (
        <div className='skills'>
            <pre className='sub-title'>&lt; Skills /&gt;</pre>
            <h1 className='glitch title'>WHAT I USE?</h1>

            <div className='tab-header'>
                <div className='tab selected-tab' onClick={event => switchTab(event, 'frontend-body')}> Frontend </div>
                <div className='tab' onClick={event => switchTab(event, 'backend-body')}> Backend </div>
                <div className='tab' onClick={event => switchTab(event, 'tools-body')}> Tools </div>
                <div className='tab' onClick={event => switchTab(event, 'other-body')}> Other </div>
            </div>
            <div className='container'>
                <div className='tab-body' id='frontend-body'>
                    <h1>Frontend Skills</h1>
                    <div className='skills-container'>

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
                <div className='tab-body' id='backend-body'>
                    <h1>backend Skills</h1>
                    <div className='skills-container'>
                        <div className='skill'>
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <p>HTML5</p>
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon className='icon' icon={faCss3Alt} />
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>
                <div className='tab-body' id='tools-body'>
                    <h1>tools Skills</h1>
                    <div className='skills-container'>
                        <div className='skill'>
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <p>HTML5</p>
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon className='icon' icon={faCss3Alt} />
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>
                <div className='tab-body' id='other-body'>
                    <h1>other Skills</h1>
                    <div className='skills-container'>
                        <div className='skill'>
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <p>HTML5</p>
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon className='icon' icon={faCss3Alt} />
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
