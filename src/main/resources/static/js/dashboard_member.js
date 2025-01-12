document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("runChart").getContext("2d");

  const runChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Distance (km)",
          data: [10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
        },
        {
          label: "Calories Burned",
          data: [200, 300, 400, 350, 500, 450, 600, 550, 700, 650, 800, 750],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Monthly Activity Overview",
          font: {
            size: 18,
            weight: "bold",
          },
          color: "#333", 
          padding: {
            top: 10,
            bottom: 20,
          },
          align: "center", 
        },
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
