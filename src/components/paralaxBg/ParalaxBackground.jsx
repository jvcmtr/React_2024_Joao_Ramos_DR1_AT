import React from 'react';
import styles from './paralax.module.css';

// Componente feito com auxilio de Inteligencia Artificial
const ParalaxBackground = ({ children }) => {
  return (
    <div className={styles.parallax}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ParalaxBackground;