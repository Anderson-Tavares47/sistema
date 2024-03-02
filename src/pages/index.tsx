import React, { useState } from 'react';
import styles from "@/styles/login.module.css";// Supondo que você está usando CSS Modules

const LoginPage = () => {
  // Definindo o estado para os campos de e-mail e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Lógica para tratamento de sucesso
        console.log('Login bem-sucedido!');
      } else {
        // Lógica para tratamento de erro
        console.error('Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.welcomeTitle}>Seja bem-vindo</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              className={styles.inputField}
              type="email"
              placeholder="Informar email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.inputField}
              type="password"
              placeholder="Informar senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={styles.loginButton}
          >
            Fazer Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
