
import nike from '../img/OIP.jpg';
import ave from '../img/impresionante-diseno-logotipo-ave-fenix_414847-186.png';
import whey from '../img/whey.jpg'

const Header = () => {
    return (

    <header> 
        <div class="ico">
                <img class="menu" src={ave} alt="logo" />
                <img src={nike} alt="nike" />
            
        </div>  
        <h1 class= "tit">
        Athlete Transformation
        </h1>
        <div class="ico">
                <img src={whey} alt="protein" />  
                <img src={ave} alt="logo" />
            
        </div>  
    </header>
    )

}

export default Header