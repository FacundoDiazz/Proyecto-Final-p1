

const Alta= () => {
    return (
<div class="alta">
                <form action="Direccion" method="post">
                    
                    <label for="Nombre"> Nombre: </label>  <br />
                    <input type="text" name="nombre" class="contact" /> <br /><br />
                    
                    <label for="Direccion"> Precio:   </label> <br />
                        <input type="number" name="Email" class="contact" /> <br /> <br />
                    
                    <label for="Telefono"> Stock:  </label><br /> 
                        <input type="number" name="telefono" class="contact" /> <br /> <br />
                        
                    <label for="Texto"> Categoria:  </label><br />
                        <input type="text" name="Texto" class="contact" /> <br /> <br />  
                        
                    <label for="Texto"> Detalles:  </label><br />
                        <input type="text" name="Texto" class="contact" /> <br /> <br />
        
                        <input type="button" value="Enviar" class="boton" /><br />  
                                         
                </form>
            </div>
    );
}

export default Alta;