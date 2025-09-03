// Creation the header 
import menu from '../assets/menu.png'
// import Menu from './Menu'
import '../styles/Header.css' 
const food = "Ma nourriture"
const mail = "Mail"

function Header({toggleMenu}) {
  
    return (
        <div className='header'> 
  
     <div className="header_image"> 
        <img 
        src = {menu} alt="menu du site" className = 'header_logo' onClick = {toggleMenu}/> 
      </div>
        
        
      <div>
      <h2>{food}</h2>
        </div>
        
        <div className= "header_mail">
        <h2>{mail}</h2>

        </div>
    </div>
    )
}

export default Header