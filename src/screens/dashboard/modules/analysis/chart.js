import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart({time={}, temprature={}, humidity={}}) {

  return <Line 
    data={{
      labels: time.list,
      datasets: [
        {
          label: 'Temprature (F)',
          data: temprature.list,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Relative Humidity',
          data: humidity.list,
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235, 0.2)',
        },
      ],
    }} 
    options={{
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }} 
  />
}
