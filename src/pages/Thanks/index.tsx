import React from 'react';
import "./index.css"


import logoImg from '../../assets/logo.png';


const Thanks: React.FC = () => {
  return (
    <div className="container">
        <h1>
          Enxoval
          <br />
          Fácil
        </h1>
        <div className="message">

        <h2>Obrigado por se cadastrar. <br></br>Em breve o app será lançado.</h2>
        </div>

        <img src={logoImg} alt="LeveCrar" />
    </div>
  );
};
export default Thanks;
