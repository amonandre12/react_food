// The big image content 
import chef from '../assets/chef.jpg'
import '../styles/About.css'

const title = "À propos de moi, l'homme de la nourriture" 

const paragraph = [
    {title1 : "Je suis qui je suis !"} , 
    {para1 : "Avec passion pour la vraie et bonne nourriture"}, 
    {description : "Juste moi, moi et moi, explorant l'univers de l'inconnu. J'ai un cœur d'amour et un intérêt pour le blog Lorem ipsum et Mauris Neque Quam. Je veux partager mon monde avec toi. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
]

// Description the about 

const para = paragraph.map(text => 
    <div>
         <h2>{text.title1}</h2>
         <p>{text.para1}</p>
         <p>{text.description}</p>
    </div>
)
function About() {
    return (
        <>
        <hr/>
        
        <div className='image_content'>
            <h2>{title}</h2>
        <img src={chef} alt='Une image du chef'/>

      <div>
            {para}
         </div>
        </div>
       
        </>
        
    )
}
export default About