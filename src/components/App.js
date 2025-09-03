
import { useState } from 'react' 
import Header from './Header'
import Menu from './Menu'
import RestoreList from './RestoreList'
import Links from './Links'
import Image from './About'
import Footer from './Footer'
// import './App.css';

function App() {
   const [isOpen , setIsOpen] = useState(false) ;
  
  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function closeMenu () { 
    setIsOpen(false) 
  }
  return (

    <div className="App"> 
       <Header toggleMenu ={toggleMenu}/> 
       <Menu isOpen={isOpen} closeMenu= {closeMenu}/> 
       
       <section id="food">
      <RestoreList /> 
       </section>
      
       <Links/>

       <section id = "about">

        <Image/>

       </section>
      
      
      <Footer/>
    </div>
  );
}

export default App;







