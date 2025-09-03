// Creation the menu 
import '../styles/Menu.css'

function Menu({isOpen , closeMenu}) {
    if (!isOpen) return null; 
   
    return (
    <div className={`menu_styles ${isOpen ? 'open' : 'closed'}`}> 

        <ul className = "links"> 

            <div className='link_color'>
            <li><a href="closeMenu" onClick ={closeMenu} > Close Menu</a></li> 
            </div>

            <div className='link_color'>
                <li><a href="#food" onClick ={closeMenu} >Food</a></li>
            </div>
           
              <div className='link_color'>
                <li><a href="#about" onClick ={closeMenu} >About</a></li>  
            </div> 
            
        </ul>
    </div>
    )
}

export default Menu 