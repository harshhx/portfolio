import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

const App =() =>{
    return(
        <>
            <Header />
            <Nav />
            <About />
            <Skills/>
            <Contact />
        </>
    );
}

export default App
