// Render Chart
const ctx = document.getElementById('runChart').getContext('2d');
const runChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Jarak Tempuh (km)',
      data: [10, 20, 30, 40, 50, 60],
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

// Export to PDF Function
function exportPDF() {
    // Ambil elemen yang ingin di-export ke PDF
    var elem = document.getElementById('halaman');
  
    // Buat objek html2canvas
    html2canvas(elem, {
      onrendered: function(canvas) {
        // Buat objek jsPDF
        var doc = new jsPDF();
  
        // Tambahkan gambar ke PDF
        var img = canvas.toDataURL('image/png');
        doc.addImage(img, 'PNG', 0, 0, canvas.width, canvas.height);
  
        // Simpan PDF
        doc.save('halaman.pdf');
      }
    });
  }