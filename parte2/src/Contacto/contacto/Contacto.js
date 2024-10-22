

const Contacto = () => {
    return (
        <div class="formulario">
            <form action="Direccion" method="post">
                
                <label for="Nombre"> Nombre: </label>  <br />
                <input type="text" name="nombre" class="contact" /> <br /><br />
                
                <label for="Direccion"> Email:   </label> <br />
                    <input type="email" name="Email" class="contact" /> <br /> <br />
                
                <label for="Telefono"> Telefono:  </label><br />
                    <input type="number" name="telefono" class="contact" /> <br /> <br />
                    
                <label for="Texto"> Comentarios/Preguntas  </label><br />
                    <input type="text" name="Texto" class="contact" /> <br /> <br />   

                    <input type="button" value="Enviar" class="boton" /> <br />                    
            </form>
        </div>
    );

}

export default Contacto;