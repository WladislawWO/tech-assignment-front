import {
  CopyIcon, HomeIcon, InfoIcon, TwitterIcon,
} from '../../assets/icons';
import BarChart from '../../components/BarChart';
import ChartCard from '../../components/ChartCard';
import LineChart from '../../components/LineChart';
import StatisticCard from '../../components/StatisticCard';
import st from './styles.module.scss';

const statistic = [
  {
    title: 'Reports amount',
    value: '1014',
    icon: <CopyIcon className={st.icon} />,
    gradient: ['#f5af10', '#f4910a'],
  },
  {
    title: 'Partner count',
    value: '8',
    icon: <HomeIcon className={st.icon} />,
    info: `Since ${new Date().toString()}`,
    gradient: ['#29901e', '#77c91a'],
  },
  {
    title: 'Countries count',
    value: '12',
    icon: <InfoIcon className={st.icon} />,
    gradient: ['#ff4d4d', '#fb775b'],
  },
  {
    title: 'Reports rate',
    value: '25',
    icon: <TwitterIcon className={st.icon} />,
    info: 'Per day',
    gradient: ['#75e0f7', '#32d1d9'],
  },
];

export default function Dashboard() {
  return (
    <div className={st.dashboardContainer}>
      <div className={st.cardContainer}>
        {statistic.map(({
          title, value, info, icon, gradient,
        }, i) => (
          <StatisticCard
            key={i}
            title={title}
            value={value}
            info={info}
            icon={icon}
            gradient={gradient}
          />
        ))}
      </div>

      <div className={st.cardContainer}>
        <ChartCard
          title="Weekday breakdown"
          subtitle="For the whole period"
          date={`Starting ${new Date().toString()}`}
        >
          <LineChart
            title="chart"
            bgColor="#ff4d4d"
            labels={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            gradient={['#29901e', '#77c91a']}
          />
        </ChartCard>

        <ChartCard
          title="Breakdown by countries"
          subtitle="For the whole period"
          date={`Starting ${new Date().toString()}`}
        >
          <BarChart
            title="chart"
            labels={['ca', 'il', 'fr', 'gb', 'us', 'uk', 'it']}
          />
        </ChartCard>

        <ChartCard
          title="Breakdown by category"
          subtitle="For the whole period"
          date={`Starting ${new Date().toString()}`}
        >
          <LineChart
            title="chart"
            bgColor="#77c91a"
            labels={['21', '43', '23', '45', '23', '54', '34']}
            gradient={['#ff4d4d', '#fb775b']}
          />
        </ChartCard>
      </div>
    </div>
  );
}
