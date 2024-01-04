import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SignalChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chart: Chart<"line"> | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [],
            datasets: [
              {
                label: 'Signal Strength',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            animation: {
              duration: 0, // Disable animation for real-time updates
            },
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Dummy data for testing
        const dummyData = [10, 20, 30, 40, 50];
        let counter = 0;

        setInterval(() => {
          if (chart) {
            const newData = Math.floor(Math.random() * 100);

            if (chart.data.labels && chart.data.datasets[0].data) {
              chart.data.labels.push(counter);
              chart.data.datasets[0].data.push(newData);

              counter++;

              chart.update();
            }
          }
        }, 100); // Update more frequently (adjust as needed for smoothness)
      }
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default SignalChart;
