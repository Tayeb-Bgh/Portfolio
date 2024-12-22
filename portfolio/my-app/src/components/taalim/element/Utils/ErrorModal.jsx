// ErrorModal.jsx
import React from 'react';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
        <h2>Error</h2>
        <p>{message}</p>
        <button className={styles['close-button']} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
