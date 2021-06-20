import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
// COMPONENTS
import Dropdownmenu from './components/Dropdownmenu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// PAGES
import Home from './pages/home';
import Boutique from './pages/boutique';
import Contact from './pages/contact';
import Equipes from './pages/equipes';
import Leclub from './pages/leclub';
import Licences from './pages/licences';
import Pdfdoc from './pages/pdfdoc';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resizedddddd')
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdownmenu isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/leclub' exact component={Leclub} />
        <Route path='/equipes' exact component={Equipes} />
        <Route path='/boutique' exact component={Boutique} />
        <Route path='/licences' exact component={Licences} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/pdfdoc' exact component={Pdfdoc} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
