import React, { useState } from 'react';
import styles from '@/styles/sidebar.module.css';

export default function Sidebar() {
  const [recolhido, setRecolhido] = useState(false);

  const toggleRecolhido = () => {
    setRecolhido(!recolhido);
  };

  return (
    <div className={styles.sidebar}>
      <a className={styles.link}>Home</a>
      <a className={styles.link}>Sobre</a>
      <a className={styles.link}>Serviços</a>
      <a className={styles.link}>Contato</a>
    </div>
  );
};
