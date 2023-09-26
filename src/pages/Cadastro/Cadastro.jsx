import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import './Estilo.css';

const Cadastro = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
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
    const { email, senha, nome, sobrenome, dataNascimento } = formData;

    if (!email || !senha || !nome || !sobrenome || !dataNascimento) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, senha);
      await firestore.collection('users').doc(user.uid).set({
        nome,
        sobrenome,
        dataNascimento,
      });
      history.push('/principal');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" />
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
        <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} placeholder="Sobrenome" />
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          placeholder="Data de Nascimento"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
