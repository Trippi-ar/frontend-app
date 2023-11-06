import React, { useState } from 'react';
import Header from './commons/Header';
import './loggin.css'; // Importa tu archivo CSS aquí
import Logo from './images/Logo2.png';
import { AppBar, SvgIcon } from "@mui/material";

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
    <div style={{ backgroundColor: '#56baed', width: '100%', height: '100%', display: 'flex' }}>
      <div className="wrapper fadeInDown">
        <img className="logo" src={Logo} alt="Logo" />
    
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          <h2 className="inactive underlineHover">Sign Up </h2>

          <form onSubmit={handleLogin}>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={email} onChange={handleEmailChange} />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" value={password} onChange={handlePasswordChange} />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a> <br />
            <a className="underlineHover" href="./">Back</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
