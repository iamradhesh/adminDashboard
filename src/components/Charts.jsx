import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Legend } from 'chart.js';
import { Paper, Button, Typography } from '@mui/material';

// Register required components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Legend);

const DashboardCharts = ({ candidates = [] }) => {
  const [showBarChart, setShowBarChart] = useState(true);

  // Process candidates data for charts
  const jobCounts = candidates.reduce((acc, candidate) => {
    if (candidate.job) {
      acc[candidate.job] = (acc[candidate.job] || 0) + 1;
    }
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(jobCounts),
    datasets: [
      {
        label: 'Job Applications',
        data: Object.values(jobCounts),
        backgroundColor: ['#1976d2', '#ffa726', '#66bb6a'],
      },
    ],
  };

  const pieData = {
    labels: ['Reviewed', 'Not Reviewed'],
    datasets: [
      {
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], // Mocked data
        backgroundColor: ['#42a5f5', '#ff7043'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top', // You can adjust the position: 'top', 'bottom', 'left', 'right'
      },
    },
  };

  return (
    <Paper elevation={10} sx={{ height: "100%", width: "40%", padding: 2, marginRight: 2 }}>
      <Typography variant="h6" component="div">
        Dashboard Charts
      </Typography>
      <Button variant="contained" onClick={() => setShowBarChart(!showBarChart)}>
        Toggle Chart
      </Button>
      {showBarChart ? <Bar data={barData} /> : <Pie data={pieData} options={pieOptions} />}
    </Paper>
  );
};

export default DashboardCharts;
