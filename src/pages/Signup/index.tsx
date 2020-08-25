import React, { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import './index.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import history from '../../services/history';

interface IUserCreate {
  name: string;
  email: string;
}

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log('submit form');
    try {
      await api.post('users', { name, email });
      toast.success('Cadastro Efetuado!');
      history.push('/thanks');
    } catch (error) {
      console.log(error);
      const response = error.response;
      toast.error(response ? error.response.data.error :'API Offline');
    }
  }

  return (
    <div className="container">
      
        <h1>
          Enxoval
          <br />
          
          Fácil
        </h1>
        <div className="message">

        <p>Nosso aplicativo está em fase de desenvolvimento.</p>
        <p>Cadastre-se para começar a usar assim que for lançado.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input className="submit" type="submit" value="Cadastrar" />
        </ form>
        <a href="https://levecriar.com.br">
        <img src={logoImg} alt="LeveCrar"/>

        </a>
      
      
    </div>
  );
};
export default Signup;
