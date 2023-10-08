import React from 'react';
import styles from './components/css/Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );
}