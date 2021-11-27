import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart: React.FC = () => {
  const data = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Saída',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Entrada',
        data: [30, 14, 11, 23, 0, 1],
        fill: false,
        backgroundColor: 'rgb(16, 238, 16)',
        borderColor: 'rgba(11, 94, 38, 0.2)',
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
