// Inisialisasi Grafik Menggunakan Chart.js
const ctx = document.getElementById('runChart').getContext('2d');
const runChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Total Distance (km)',
      data: [12, 19, 25, 40, 35, 60, 70, 80, 55, 45, 30, 50],
      borderColor: '#e67e22',
      backgroundColor: 'rgba(230, 126, 34, 0.2)',
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: '#e67e22',
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Fungsi Dummy untuk Export PDF
document.getElementById('exportBtn').addEventListener('click', function() {
  alert('PDF Exported Successfully!');
});
