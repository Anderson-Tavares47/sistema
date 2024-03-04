import React from 'react';
import styles from '@/styles/cards.module.css';

const Card = () => {
    return (
        <>
            <div className={styles.card2}>
                <div>
                    <h1 className={styles.dados2}>Total</h1>
                    <h1 className={styles.dados2}>R$ 500</h1>
                </div>
                <div className={styles.elipse3}>
                    <div className={styles.elipse4}></div>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <h1 className={styles.dados}>Total</h1>
                    <h1 className={styles.dados}>R$ 500</h1>
                </div>
                <div className={styles.elipse}>
                    <div className={styles.elipse2}></div>
                </div> {/* Elipse */}
            </div>
        </>
    );
};

export default Card;
