// The footer content 
import "../styles/Footer.css"
// Les importations des images de footer 
import workshopImg from '../assets/workshop.jpg'
import workImg from '../assets/gondol.jpg'
import imageImg from '../assets/image.jpg'

const title = "PIED DE PAGE" 
const title1 = "ARTICLES DE BLOG"
const title3 = "TAGS POPULAIRES"

function Footer () {
    
    return (
        <div className="footer_content "> 
            <div>
                <h2>{title}</h2>

                <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo <br/> condimentum, porta lectus vitae, ultricies congue <br/> gravida diam non fringilla.</p>
                <p>Propulsé par <a href="#" >w3.css</a></p>
            </div>
 
            <div>
            
            <h2>{title1}</h2> 

         <div className="footer_img">
            
            <div className="img_flex">
                <img src={workshopImg} alt="une image de travail"/> 

                <p>Lorem <br/> Sed mattis nunc</p>
            </div>

            <div className="img_flex">
                <img src={workImg} alt="une image de work"/>

                <p>Ipsum <br/> Praes tinci sed </p>  
            </div>
        </div> 
            </div>

            <div>
                <h2>{title3}</h2>

                <img src={imageImg} alt="Une carte de population" />
            </div>
        </div>
    )
}
export default Footer