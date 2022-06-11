import React from 'react';
import st from './styles.module.scss';

export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className={st.button}
    >
      {children}
    </button>
  );
}
