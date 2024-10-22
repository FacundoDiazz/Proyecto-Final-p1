import './App.css';
import Navegacion from './Componentes/Navegacion.js';
import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js';
import Nosotros from './Nosotros/Nosotros/Nosotros.js';
import Ecomerce from './Ecomerce/Ecomerce.js';
import Alta from './Alta/Alta.js';
import Contacto from './Contacto/contacto/Contacto.js';
import {Routes, Route} from 'react-router-dom';
import Login from './Login/Login.js';
import Admin from './Admin/Admin.js';

function App() {
  return (
  <>
  
  <Header />

  <Navegacion />

  <Routes>
    <Route path='/Nosotros' element={<Nosotros />} /> 
    <Route path='/Ecomerce' element={<Ecomerce />} />
    <Route path='/Alta' element={<Alta />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Admin' element={<Admin />} />
    <Route path='/Contacto' element={<Contacto/>} />
  </Routes>

  <Footer />
  </>
  );
}



export default App;
