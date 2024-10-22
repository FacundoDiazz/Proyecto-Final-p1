import { useNavigate } from "react-router-dom";
import '../Login/Login.css';
import { useState } from "react";



const Login = () => {



    const [email, setEmail]= useState('');

    const navigate = useNavigate();


    const LoginUser = () => {    
    alert("Regitrado")

console.log(email);

    navigate('/admin');
}
    return (

        <>
            <h1 class="text-center mt-5" >
                Registrate
            </h1>
        <div class="Log">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class= "boo">
                <button type="submit"  onClick={LoginUser} class="btn btn-primary ">registrarse</button>
                <button type="reset" class="btn btn-danger">borrar</button>
                </div>
            </form>
</div>
        
        </>
    );

}

export default Login