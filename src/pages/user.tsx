import React, { useState } from 'react';
import styles from "@/styles/user.module.css";
import Sidebar from './component/sidebar';

export default function user () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//@ts-ignore
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
    <><Sidebar /><div className={styles.container}>
          <div className={styles.loginCard}>
              <h1 className={styles.welcomeTitle}>Trocar senha atual</h1>
              <form onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                      <input
                          className={styles.inputField}
                          type="text"
                          placeholder="senha atual"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                      <input
                          className={styles.inputField}
                          type="password"
                          placeholder="nova senha"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button
                      type="submit"
                      className={styles.loginButton}
                  >
                      trocar senha
                  </button>
              </form>
          </div>
      </div></>
  );
};

