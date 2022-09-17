import React from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {DiSass} from 'react-icons/di'
import {SiJava} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {DiGit} from 'react-icons/di'
import {SiCplusplus} from 'react-icons/si'





const Skills = () => {
    return (
        <section id='skills' className='skills container section'>
        <div className="sectionTitle">
            <span className="titleNumber">02.</span>
            <h5 className="titleText">Habilidades
            <div className="underline"><span></span></div>
            </h5>    
        </div> 

        <div className="skillsContainer grid">
            <div className="skillsGroup">
                <div className="groupTitle">
                    <h2 className="title">Front-End</h2>
                    <span className="subTitle">
                        Formação
                    </span>
                </div>

                <div className="generalSkills">

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <AiFillHtml5 className='icon'/>
                        </div>
                        <span className="skillsName">HTML</span>
                    </div>

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <DiCss3 className='icon'/>
                        </div>
                        <span className="skillsName">CSS</span>
                    </div> 

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <DiJavascript1 className='icon'/>
                        </div>
                        <span className="skillsName">JavaScript</span>
                    </div> 

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <FaReact className='icon'/>
                        </div>
                        <span className="skillsName">React</span>
                    </div> 

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <DiSass className='icon'/>
                        </div>
                        <span className="skillsName">Sass</span>
                    </div>  

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <SiCplusplus className='icon'/>
                        </div>
                        <span className="skillsName">C++</span>
                    </div>  

                </div>
            </div>
        
            <div className="skillsGroup">
                <div className="groupTitle">
                    <h2 className="title">Back-End</h2>
                    <span className="subTitle">
                        Formação
                    </span>
                </div>

                <div className="generalSkills">

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <SiJava className='icon'/>
                        </div>
                        <span className="skillsName">Java</span>
                    </div>

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <SiNodedotjs className='icon'/>
                        </div>
                        <span className="skillsName">Node.JS</span>
                    </div> 

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <SiTypescript className='icon'/>
                        </div>
                        <span className="skillsName">Typescript</span>
                    </div>  

                </div>
            </div>

            <div className="skillsGroup">
                <div className="groupTitle">
                    <h2 className="title">UI/UX e Ferramentas</h2>
                    <span className="subTitle">
                        Formação
                    </span>
                </div>

                <div className="generalSkills">

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <SiFigma className='icon'/>
                        </div>
                        <span className="skillsName">Figma</span>
                    </div>

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <AiFillGithub className='icon'/>
                        </div>
                        <span className="skillsName">GitHub</span>
                    </div> 

                    <div className="singleSkills">
                        <div className="iconBox flex">
                            <DiGit className='icon'/>
                        </div>
                        <span className="skillsName">Git</span>
                    </div> 

                </div>
            </div>
        </div>
        </section>
    )
}

export default Skills