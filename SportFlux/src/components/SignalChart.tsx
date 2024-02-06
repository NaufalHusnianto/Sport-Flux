import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { IonCard, IonCardContent } from '@ionic/react';

const SignalChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const dataRef = useRef<number[]>([]);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: Array.from({ length: 61 }, (_, i) => i),
          datasets: [
            {
              label: 'Scanning',
              data: dataRef.current,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 2,
              tension: 5,
              pointRadius: 5,
              pointHoverRadius: 5,
            }
          ]
        },
        options: {
          animation: {
            duration: 500,
            easing: 'linear',
          },
          scales: {
            x: {
              min: -10,
              max: 10,
              type: 'linear',
              ticks: {
                color: 'white',
              }
            },
            y: {
              min: 1,
              max: 100,
              beginAtZero: true,
              ticks: {
                color: 'white',
              }
            }
          }
        }
      });

      const updateChart = () => {
        const newData = [...dataRef.current];
        newData.shift();
        newData.push(Math.random() * 100);
        dataRef.current = newData;
        myChart.data.datasets[0].data = newData;
        myChart.update();
      };

      const intervalId = setInterval(updateChart, 500);

      return () => {
        clearInterval(intervalId);
        myChart.destroy();
      };
    }
  }, []);

  return (
    <IonCard style={{ background: 'rgba(0,0,0,0.3)' }}>
      <IonCardContent>
        <canvas ref={chartRef} />
      </IonCardContent>
    </IonCard>
  );
};

export default SignalChart;
