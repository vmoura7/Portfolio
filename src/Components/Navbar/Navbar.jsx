import React, {useState} from 'react'
import './navbar.css'
import  {AiFillCloseCircle} from 'react-icons/ai'
import  {TbGridDots} from 'react-icons/tb'


const Navbar = () => {


    const [active, setActive] = useState('navBar')

    const showNavBar = () => {
        setActive('navBar activeNavbar')    
    }

    const removeNavBar = () => {
        setActive('navBar')    
    }

    const [activeHeader, setactiveHeader] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 10) {
            setactiveHeader('header activeHeader')    
        }
        else {
            setactiveHeader('header')    
        }
    }

    window.addEventListener('scroll', addBg)

    return (
        <header className={activeHeader}>
        <div ClassName="logoDiv">
            <h1 className="logo"><a href="#home">VM.</a></h1>
        </div> 

        <div className={active}>
            <ul onClick={removeNavBar} className="navLists">
                <li className="navItem">
                    <a href="#about" className="navLink">
                    <span className="headerNumber">1.</span> Sobre</a>
                </li>
                <li className="navItem">
                    <a href="#skills" className="navLink">
                    <span className="headerNumber">2.</span> Habilidades</a>
                </li>
                <li className="navItem">
                    <a href="#projects" className="navLink">
                    <span className="headerNumber">3.</span> Projetos</a>
                </li>
                <li className="navItem">
                    <a href="#contacts" className="navLink">
                    <span className="headerNumber">4.</span> Contatos</a>
                </li>
                    <button className='btn'>
                        <a href="Apresentacao.pdf" download="Apresentacao.pdf">Resumo</a>
                    </button>
            </ul>

            <div onClick={removeNavBar} className="closeNavBar">
                <AiFillCloseCircle className='icon'/>
            </div>
        </div>  

        <div onClick={showNavBar} className="toggleNavBar">
            <TbGridDots className='icon'/>
        </div>

        </header>
    )
}

export default Navbar