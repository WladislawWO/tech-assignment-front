import React from 'react';
import { SearchIcon } from '../../assets/icons';
import st from './styles.module.scss';

export default function SearchInput({ placeholder }) {
  return (
    <div className={st.inputContainer}>
      <input className={st.input} placeholder={placeholder} />
      <SearchIcon className={st.icon} />
    </div>
  );
}
