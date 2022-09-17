import React from 'react'
import './app.css'
import About from './Components/About Section/About'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills Section/Skills'
import Home from './Components/Home Section/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects Section/Projects'
import Contacts from './Components/Contacts Section/Contacts'



const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
        </>
    )
}

export default App