import React, { useState } from 'react';
import Header from './commons/Header';
import './loggin.css'; // Importa tu archivo CSS aquíi
import Logo from './images/Logo2.png'
import { AppBar, SvgIcon} from "@mui/material";



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente.

    // Aquí debes agregar la lógica de autenticación, por ejemplo, enviar los datos al servidor.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
  //   <div>
  //    <AppBar>
  //               <img class="logo" src={Logo} ></img>
  //     </AppBar>
  //   <div class="div">
  //     <h3>BIENVENIDOS</h3>
  //     <form onSubmit={handleLogin}>
  //     <div class="caja">
  //       <div>
  //         <label>Email:</label>
  //         <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
  //       </div>
  //       <div>
  //         <label>Contraseña:</label>
  //         <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
  //       </div>
  //     </div>
  //       <button class="iniciar" type="submit">
  //         Iniciar sesión
  //       </button>
  //       <button class="volver" type="submit">
  //         Volver
  //       </button>
  //     </form>
  //   </div>
  // </div>
  // );

  <div className="wrapper fadeInDown">
            <img class="logo" src={Logo} ></img>
    
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>


        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={email} onChange={handleEmailChange}/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" value={password} onChange={handlePasswordChange}/>
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a> <br/>
          <a className="underlineHover" href="./">Back</a>
        </div>
      </div>
    </div>
  );
}

export default Login;


