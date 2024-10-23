import { useNavigate } from "react-router-dom";
import '../Login/Login.css';
import { useState } from "react";



const Login = () => {

        const [email, setEmail]= useState('');
        const [password, setPasword]= useState('');
        const navigate = useNavigate();

        const LoginUser = (event) => {    

        event.preventDefault();

        console.log(email);
        console.log(password);

    if(email === '' || password === '' ){
    alert("Compplete los campos");
    return;
    }
    if(email === 'facudiaz1891@gmail.com' && password === '1234'){
    alert("Registrdo")
    navigate('/admin');
    } else {
    alert("login o password incorrectos");
    }
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
                    <input type="email"
                    class="form-control" 
                    id="exampleInputEmail1" 
                    value={email}
                    onChange={() =>setEmail(Event.target.value)}
                    aria-describedby="emailHelp"
                    placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" 
                    class="form-control" 
                    id="exampleInputPassword1" 
                    value={password}
                    onChange={() =>setPasword(Event.target.value)}
                    placeholder="Password" />
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