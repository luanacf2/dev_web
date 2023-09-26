import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import './Estilo.css';

const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, senha } = formData;

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, senha);
      history.push('/principal');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Usuário não cadastrado ou senha inválida.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
