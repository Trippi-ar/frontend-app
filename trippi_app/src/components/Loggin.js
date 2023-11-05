import React,  { useState }from 'react';

function Loggin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar los datos al servidor.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );

}

export default Loggin;