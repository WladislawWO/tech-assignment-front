import React from 'react';
import { ClockIcon } from '../../assets/icons';
import st from './styles.module.scss';

export default function ChartCard({
  children, title, subtitle, date,
}) {
  return (
    <div className={st.chartCardContainer}>
      <div className={st.chartWrapper}>
        {children}
      </div>
      <div className={st.title}>{title}</div>
      <div className={st.subtitle}>{subtitle}</div>
      <div className={st.date}>
        <ClockIcon className={st.icon} />
        {date}
      </div>
    </div>
  );
}
