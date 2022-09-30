import React from 'react'
import './projects.css'
import {FiGithub} from 'react-icons/fi'

import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'



const data = [
{
    id: 1,
    image: img1,
    liveLink: 'https://vmoura7.github.io/projetos-ONE/',
    github: 'https://github.com/vmoura7/projetos-ONE',
    title: 'Decodificador',
    desc: 'Alura Challenge | Oracle One | Lógica de Programação - Decodificador de texto',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
},

 {
     id: 2,
     image: img2,
     liveLink: 'https://vmoura7.github.io/projetos-ONE-lvl2/',
     github: 'https://github.com/vmoura7/projetos-ONE-lvl2',
     title: 'Hangman',
     desc: 'Alura Challenge | Oracle One | Encontre a palavra secreta - Jogo da Forca',
     tech1: 'Html',
     tech2: 'CSS',
     tech3: 'JavaScript',
 },

 {
     id: 3,
     image: img3,
     liveLink: 'https://vmoura7.github.io/blog-de-receitas/',
     github: 'https://github.com/vmoura7/blog-de-receitas',
     title: 'Blog de Receitas',
     desc: 'Projeto responsivo para utilização e demonstração do flexbox',
     tech1: 'Html',
     tech2: 'CSS',
     tech3: 'JavaScript',
 },

 {
     id: 4,
     image: img4,
     liveLink: 'https://vmoura7.github.io/jogo-da-velha/',
     github: 'https://github.com/vmoura7/jogo-da-velha',
     title: 'Jogo da Velha',
     desc: 'Aplicação idealizada com conhecimentos adquiridos em JavaScript',
     tech1: 'Html',
     tech2: 'CSS',
     tech3: 'JavaScript',
 },

 {
     id: 5,
     image: img5,
     liveLink: 'https://vmoura7.github.io/lembretes/',
     github: 'https://github.com/vmoura7/lembretes',
     title: 'Lembrete',
     desc: 'Projeto criado para ajudar na produtividade e organização do dia a dia, com a utilização da API REST.',
     tech1: 'Html',
     tech2: 'CSS',
     tech3: 'JavaScript',
 },

 {
     id: 6,
     image: img6,
     liveLink: 'https://github.com/vmoura7/petshop-cliente',
     github: 'https://github.com/vmoura7/petshop-cliente',
     title: 'Projeto PetShop - área do cliente.',
     desc: 'Projeto com o formulário de cadastro do cliente no PetShop. Foi utilizado (DOM) para a validação dos dados e a API do CEP para preenchimento automático das informações.',
     tech1: 'Html',
     tech2: 'CSS',
     tech3: 'JavaScript',
 },

 {
     id: 7,
     image: img7,
     liveLink: 'https://github.com/vmoura7/petshop-admin',
     github: 'https://github.com/vmoura7/petshop-admin',
     title: 'Projeto PetShop - admin.',
     desc: 'Projeto com páginas da área administrativa do Petshop, para edição de clientes e inclusão de produtos.',
     tech1: 'Html',
     tech2: 'CSS',
     tech3: 'JavaScript',
 },

 {
    id: 8,
    image: img8,
    liveLink: 'https://challenge-ecommerce-one.vercel.app',
    github: 'https://github.com/vmoura7/Challenge-Ecommerce',
    title: 'Projeto E-commerce.',
    desc: 'Projeto de uma loja virtual, com páginas responsivas utilizando HTML, CSS e Javascript.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
},

{
    id: 9,
    image: img9,
    liveLink: 'https://portfolio-vmoura7.vercel.app',
    github: 'https://github.com/vmoura7/portfolio',
    title: 'Meu Portfolio.',
    desc: 'Meu primeiro projeto utilizando os conhecimentos adquiridos em React',
    tech1: 'React',
    tech2: 'Sass',
},
]




const Projects = () => {
    return (
        <section id='projects' className='projects container section'>
        <div className="sectionTitle">
            <span className="titleNumber">03.</span>
            <h5 className="titleText">Projetos
            <div className="underline"><span></span></div>
            </h5>    
        </div> 

        <div className="projectsContainer grid">
           {
            data.map(({id, github, image, liveLink, desc, title, tech1, tech2, 
            tech3}) => {
                return(
                    <div key={id} className="singleProjects">


                        <div className="externalLinks flex">
                            <div className="githubIcon">
                                <a href={github} target="_blank">
                                    <FiGithub className='icon'/>
                                </a>    
                            </div>
                        </div> 

                        <div className="imgDiv">
                            <a href={liveLink} target="_blank">
                                <img src={image} alt={title} />    
                            </a>
                        </div>   

                        <div className="projectsTitle">
                            <h3>{title}</h3>         
                        </div>

                        <div className="desc">
                            {desc}    
                        </div>

                        <div className="technologies flex">
                            <small>{tech1}</small>
                            <small>{tech2}</small>
                            <small>{tech3}</small>    
                        </div>
                    </div>    
                )    
            })

           } 
        </div>
        </section>
    )
}

export default Projects