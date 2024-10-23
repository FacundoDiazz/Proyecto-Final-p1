

import {Link} from 'react-router-dom';

const Navegacion = () => {
    return (
        <>
            <nav>
                <ul class="atajos">
                <li>
                <Link to="/Nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/Ecomerce">Tienda</Link>
                </li>               
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/Alta">Alta</Link>
                </li>
                <li>
                <Link to="/Login">Registrarse</Link>
                </li>
                <li>
                <Link to="/Carrito"> 
                <i class="bi bi-cart-check">
                </i>
                </Link>
                </li>
                </ul>
            </nav>
        </>
    );
}


export default Navegacion;