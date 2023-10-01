import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Work from "./components/workExp/Work";
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from "./components/testimonials/Testimonails";
// import Confetti from "./components/Confetti";
import Footer from './components/footer/Footer'

const App =() =>{
    return(
        <>
            <Header />
            {/* <Confetti /> */}
            <Nav />
            <About />
            <Skills/>
            <Work />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App
