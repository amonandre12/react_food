// The Links numbers 
import left from '../assets/left.png'
import right from '../assets/right.png'
import "../styles/Links.css"

function Links() {
    const pages = [1 , 2 , 3 , 4 ]

    const link = pages.map(num => 
      <div key ={num}> 
          <a href='#food' className='link_surv'>{num}</a> 
      </div>
    )
    
    return ( 
      <div className = "links_group">

      <button>
        <img src= {left} alt = "arrow-left"/>
      </button>
  
      
          {link}
    
      <button>
        <img src = {right} alt = "arrow-rigth"/>
      </button>
      
      </div>
    )
}
export default Links