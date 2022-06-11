import React from 'react';
import st from './styles.module.scss';

export default function Loader() {
  return (
    <div className={st.loaderContainer}>
      <div className={st.loader} />
    </div>
  );
}
