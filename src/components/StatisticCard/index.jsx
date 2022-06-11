import React from 'react';
import { ClockIcon } from '../../assets/icons';
import st from './styles.module.scss';

export default function StatisticCard({
  title, value, info, icon, gradient,
}) {
  return (
    <div className={st.statCardContainer}>
      <div className={st.contentWrapper}>
        <div
          className={st.img}
          style={{ background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)` }}
        >
          {icon}
        </div>

        <div className={st.infoWrapper}>
          <div className={st.title}>{title}</div>
          <div className={st.value}>{value}</div>
        </div>
      </div>

      {info && (
        <div className={st.date}>
          <ClockIcon className={st.icon} />
          {info}
        </div>
      )}
    </div>
  );
}
