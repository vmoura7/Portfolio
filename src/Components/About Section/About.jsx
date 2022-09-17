import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
import img from '../../Assets/photo_2022-07-03_100-46-27.png'  


const About = () => {
    return (
        <section id='about' className='about section container'>
        

        <div className="sectionTitle">
            <span className="titleNumber">01.</span>
            <h5 className="titleText">Sobre Mim
            <div className="underline"><span></span></div>
            </h5>    
        </div>
        
        <div className="sectionContent grid">
            <div className="textSection">
               <h4>
                Sou um programador em formação, determinado e orientado para ser 
                um desenvolvedor promissor. Tenho experiência usando HTML, CSS, Sass, 
                Javascript, React, Node.JS e Java, para construir páginas da Web 
                acessíveis e sistemas baseados em componentes. Capacidade de entregar 
                resultados de qualidade, colaborando no trabalho em rápida mudança Ambientes 
                e composições de equipe capacitado em Yellow Belt.<br/><br/>

                Sou apaixonado e disposto a saber mais sobre tecnologias 
                para me tornar um desenvolvedor melhor do que ontem e 
                amanhã melhor que hoje.     
                </h4> 

                <div className="aboutBtn">
                    <a href="Currículo - João Victor Moura Gongaga Lessa.pdf" download="Currículo - João Victor Moura Gongaga Lessa.pdf" className="flex">
                        Download CV <TbCloudDownload className='icon'/>
                    </a>
                </div>
            </div>  

            <div className="aboutImgDiv">
                <img src={img} alt="Victor Moura" className="aboutImg" />
            </div>

        </div>

        </section>
    )
}

export default About