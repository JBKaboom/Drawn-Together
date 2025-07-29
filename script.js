
const ctx = document.getElementById('progressChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['AI Logs', 'Assets', 'Multiplayer', 'UI', 'Testing'],
    datasets: [{
      label: 'Feature Completion (%)',
      data: [70, 60, 80, 50, 40],
      backgroundColor: [
        '#ff00f7', '#00ffe7', '#ff00f7', '#00ffe7', '#ff00f7'
      ],
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#fff' },
        grid: { color: '#444' }
      },
      x: {
        ticks: { color: '#fff' },
        grid: { color: '#333' }
      }
    }
  }
});
