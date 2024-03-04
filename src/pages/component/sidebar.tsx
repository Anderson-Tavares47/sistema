import React, { useState } from 'react';
import styles from '@/styles/sidebar.module.css';
import Link from 'next/link';

export default function Sidebar() {
  const [recolhido, setRecolhido] = useState(false);

  const toggleRecolhido = () => {
    setRecolhido(!recolhido);
  };

  return (
    <div className={styles.sidebar}>
            <Link href="/dashboard" className={styles.link}>Dashboard</Link>
            <Link href="/chaves" className={styles.link}>Chaves GetNet</Link>
            <Link href="/user" className={styles.link}>Perfil</Link>
        </div>
  );
};
