import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import './Estilo.css';

const Principal = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userData = await firestore.collection('users').doc(user.uid).get();
          setUserInfo(userData.data());
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="principal-container">
      <h2>Dados do Usuário</h2>
      {userInfo && (
        <div>
          <p>Nome: {userInfo.nome}</p>
          <p>Sobrenome: {userInfo.sobrenome}</p>
          <p>Data de Nascimento: {userInfo.dataNascimento}</p>
        </div>
      )}
    </div>
  );
};

export default Principal;
