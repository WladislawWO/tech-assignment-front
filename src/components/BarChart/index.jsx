import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    const gradientBack = ctx.createLinearGradient(0, 0, 0, 250);
    gradientBack.addColorStop(0, '#f5af10');
    gradientBack.addColorStop(1, '#f4910a');
    ctx.fillStyle = gradientBack;
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

export const options = {
  layout: {
    padding: 20,
  },
  scales: {
    y: {
      ticks: { color: 'rgb(255, 255, 255, 0.7)' },
      grid: {
        color: 'rgb(255, 255, 255, 0.5)',
      },
    },
    x: {
      ticks: { color: 'rgb(255, 255, 255, 0.7)' },
      grid: {
        color: 'rgb(255, 255, 255, 0.5)',
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    chartArea: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
  },
};

export default function BarChart({ labels }) {
  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 20) + 50),
        backgroundColor: 'rgba(255, 255, 255, 1)',
        barThickness: 7,
        width: 10,
      },
    ],
  }), [labels]);

  return (
    <Bar options={options} data={data} plugins={[plugin]} />
  );
}
