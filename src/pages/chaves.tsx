import React, { useState } from 'react';
import Cards from './component/cards';
import Sidebar from './component/sidebar';
import styles from "@/styles/chaves.module.css";

export default function Dashboard() {
    

    return (
        <>
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.border}></div>
            </div>
        </>
    );
};
