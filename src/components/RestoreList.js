// The restore collection 
import {imageCard1} from '../data/imageCard'
import {imageCard2} from '../data/imageCard' 
import '../styles/RestoreList.css'

function RestoreList() {
    const people = imageCard1.map(person => 
        <div key = {person.id} >
        <img 
        src={person.imageId}
        alt ={person.alt} 
        height = "399px"/>
        <h3>{person.title}</h3>
        <p>{person.description}</p>  
        </div>
    )

    const image = imageCard2.map(product => 
        <div key = {product.id} >
        <img 
        src={product.imageId}
        alt ={product.alt} 
        height = "399px"/>
        <h3>{product.title}</h3>
        <p>{product.description}</p>  
        </div>
    )
   return (
    
    <>
      <div className="image_card">
        {people}
      </div>

     <div className="image_card">
        {image}
      </div>
    </>
   )
}

export default RestoreList