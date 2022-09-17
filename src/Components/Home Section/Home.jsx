import React from 'react'
import './home.css'
import {AiFillGithub} from 'react-icons/ai' 
import {AiFillLinkedin} from 'react-icons/ai' 
import {GrInstagram} from 'react-icons/gr'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'


const Home = () => {
    return (
        <section id='home' className='home section'>
           
            <div className="leftIcons">
                <div className="socials grid">
                    <a href="https://github.com/vmoura7" target='_blank'>
                        <AiFillGithub className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/victor-moura-66072618b/" target='_blank'>
                        <AiFillLinkedin className='icon'/>
                    </a>
                    <a href="https://www.instagram.com/v.moura7" target='_blank'>
                        <GrInstagram className='icon'/>
                    </a>
                    <div className="line"></div> 
                </div>
            </div>

            <div className="container homeContainer">
                
                <span className="introText">
                    Olá, meu nome é
                </span>
                
                <h1 className='title'>
                    Victor Moura
                </h1>
                
                <span className="subTitle">
                    Graduando em Analise e Desenvolvimento de Sistemas
                </span>
                
                <p className="homeParagraph">
                    Full Stack Developer Student | Oracle Next Education | Yellow Belt em Lean Seis Sigma | Retenção de Clientes
                </p>

                <div className="lowerHomeSection">
                    <button className="contactBtn">
                        <a href="#contacts" className="flex">
                            Entre em contato <TbArrowBigRightLines className='icon'/>
                        </a>    
                    </button>

                    <div className="scrollDiv">
                        <a href="#about" className="flex">
                            <h6 className="scroll">Descer</h6> <FiChevronsDown className='icon'/>   
                        </a>
                    </div>                    
                </div>
            </div>    
            
            <div className="rightEmail">
                <div>
                    <div className="emailAddress">
                        <a href="https://mailto:youremail@live.com" target='_blank'>
                            v_moura@live.com
                        </a>    
                    </div>

                    <div className="line"></div> 
                </div>
            </div>

            
        </section>
    )
}

export default Home