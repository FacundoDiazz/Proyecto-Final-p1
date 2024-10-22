
import Premium from '../img/100_premium_whey_2_kg_-_usn.jpg';
import Pro from '../img/100-whey-pro-5lb-gn.jpg';
import Isolate from '../img/100wheyisolate-2lb-gnn.jpg';
import Lean from '../img/amino-lean-usn_1.jpg';
import Cibeles from '../img/cibeles_wp_whey-protein_2021_1.png';
import Barra from '../img/D_NQ_NP_822152-MLU71106661817_082023-O.webp';
import Medias from '../img/medias negras.webp';
import Bolso from '../img/bolso.webp';
import RemeraH from '../img/remera.webp';
import RemeraM from '../img/remer mujer.webp';
import Short from '../img/short.webp';
import Guantes from '../img/guantes.webp';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>


const Alta = () => {

const carrito = () => {
alert("Agregado al carrito");
localStorage.setItem('producto', 'Whey Protein')

}



    return( 
        
        <div class="Fields">
        <section class="productosW">
        <h1 class="hpro">Whey Protein</h1>
        

        <div class="card" >
            <img src={Premium} class="card-img-top" alt="pro" />
            <div class="card-body">
            <h5 class="card-title">whey-premium $7150
            </h5>
            <p class="card-text">Medida: 30 g
            <hr />
                Proteina: 23.5g  <hr />              
                BCAA: 5g</p>
                <button onClick={carrito} > Agregar al carrito</button>
            </div>
        </div>


        <div class="card" >
            <img src={Pro} class="card-img-top" alt="pro" />
            <div class="card-body">
            <h5 class="card-title">whey-pro $2190</h5>
            <p class="card-text">Medida: 30 g
            <hr />
                Proteina: 24g  <hr />              
                BCAA: 22% <hr />
                Glutamina: 4g
            </p>
            <button onClick={carrito} > Agregar al carrito</button>
            </div>
        </div>
        
        <div class="card" >
            <img src={Isolate} class="card-img-top" alt="pro" />
            <div class="card-body">
            <h5 class="card-title">Whey Isolate Gold $3690 </h5>
            <p class="card-text">Medida: 30 g
            <hr />
                Proteina: 27g  <hr />              
                BCAA: 6g <hr />
                Grasas y Carbos: 0g
            </p>
            <button onClick={carrito} > Agregar al carrito</button>
            </div>
        </div>

        <div class="card" >
            <img src={Lean} class="card-img-top" alt="pro" />
            <div class="card-body">
            <h5 class="card-title">Aminoácido Lean USN $2280</h5>
            <p class="card-text">Medida: 10,5 g
            <hr />
            SODIO: 65g-
            POTASIO: 109mg-
            VITAMINA B6: 2mg-
            ACIDO FOLICO: 0.4mg-
            LEUCINA: 2500mg-
            ISOLEUCINA: 1250mg-
            VALINA: 1250mg-
            GLUTAMINA: 2000mg-
            </p>
            <button onClick={carrito} > Agregar al carrito</button>
            </div>
        </div>

        <div class="card" >
            <img src={Cibeles} class="card-img-top" alt="pro" />
            <div class="card-body">
            <h5 class="card-title">Wp Cibeles® 4lb Whey Protein $3799</h5>
            <p class="card-text">Medida: 10 g
            <hr />
            PROTEINA: 28g-
            CARBOHIDRATOS 48%-
            GRASAS 0%-
            14 VITAMINAS y 14 MINERALES CON EL AGREGADO L-CARNITINA-
            APORTA 4,5 g de GLUTAMINA y 5,4 g de BCAAS-
            SIN GLUTEN
            </p>
            <button onClick={carrito} > Agregar al carrito</button>
            </div></div>
        
            <div class="card" >
                <img src={Barra} class="card-img-top" alt="pro" />
                <div class="card-body">
                <h5 class="card-title">Barra de proteina 12 unidades $699</h5>
                <p class="card-text">Medida basada en: 40 g / 1 Uniad
                <hr />
                Proteina: 16g-
                Carbohidratos: 15g-
                Grasas saturadas: 2g-
                Sodio: 62g-
                Kcal: 139Kcal
                </p>
                <button onClick={carrito} > Agregar al carrito</button>
                </div></div>
        
    </section>


    <section class="productosN">
        <h1 class="hpro">Nike</h1>

        <div class="card" >
            <img src={Medias} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Medias Largas Negras $1100</h5>
            <p class="card-text">Dalo todo en los entrenamientos con las medias Nike Everyday. Los hilos suaves con tecnología absorbente de transpiración ayudan a mantener los pies cómodos y secos.</p>
            <button onClick={carrito} > Agregar al carrito</button>
            </div>
        </div>

        <div class="card" >
                <img src={RemeraH} class="card-img-top" alt="..." />
                <div class="card-body">
            <h5 class="card-title">Remera Entrenamiento Hombre $1700</h5>
            <p class="card-text">La colección Nike Pro te brinda la confianza que necesitás para superar tus metas personales. Esta remera de ajuste entallado ofrece una sensación suave y elástica que se adapta a tus deportes y ejercicios favoritos. Además, presenta un dobladillo redondeado que brinda cobertura adicional y una sensación de seguridad cuando lo llevas por dentro de una prenda para la parte inferior. </p>
            <button onClick={carrito} > Agregar al carrito</button>
                </div>
                </div>
        <div class="card">
                <img src={RemeraM} class="card-img-top" alt="..." />
                <div class="card-body">
            <h5 class="card-title">Remera Entrenamiento Mujer $1900</h5>
            <p class="card-text">Apta para entrenar o relajarte, esta remera Nike One Classic está lista para lo que quieras. La tela ligera y suave como la seda se seca rápidamente y funciona para cualquier actividad que te depare el día. </p>
            <button onClick={carrito} > Agregar al carrito</button>
                    </div>
                    </div>
        <div class="card" >
                <img src={Guantes} class="card-img-top" alt="guantes" />
                <div class="card-body">
            <h5 class="card-title">Guantes Entrenamiento $1700</h5>
            <p class="card-text">Los guantes de entrenamiento Nike Gym proporcionan un gran agarre, protección y sujeción para el levantamiento de pesas, tanto para principiantes como para atletas de cross training con más experiencia.</p>
            <button onClick={carrito} > Agregar al carrito</button>
                        </div>
                        </div>
        <div class="card">
                    <img src={Short} class="card-img-top" alt="short..." />
                    <div class="card-body">
            <h5 class="card-title">Short Hombre $2190</h5>
            <p class="card-text">Diseñados para correr, entrenar y practicar yoga, nuestros shorts Challenger absorbentes de transpiración mantienen la ligereza y frescura con un ajuste relajado que te ayuda a aprovechar al máximo tu movimiento. Los equipamos para algo más que solo correr, con un bolsillo cómodo que no te irritará cuando vayas de la pista al gimnasio.</p>
            <button onClick={carrito} > Agregar al carrito</button>
                            </div>
                            </div>
        <div class="card" >
                    <img src={Bolso} class="card-img-top" alt="Bolso" />
                    <div class="card-body">
            <h5 class="card-title">Bolso Unisex $2790</h5>
            <p class="card-text">El bolso de entrenamiento Nike Academy Team ofrece un diseño duradero para organizar tus cosas. Los compartimientos designados brindan espacio para tu balón, botín de fútbol y ropa, mientras que las múltiples correas te permiten llevar cómodamente tu equipo cuando estás en movimiento.</p>
            <button onClick={carrito} > Agregar al carrito</button>
                                </div>
        </div>
        
    </section>
    </div>
    );
}

export default Alta;