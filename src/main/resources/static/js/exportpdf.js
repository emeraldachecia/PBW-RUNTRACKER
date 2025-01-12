import jsPDF from "jspdf";

document.getElementById("exportBtn").addEventListener("click", () => {
  // Inisialisasi jsPDF
  const doc = new jsPDF();

  // Tambahkan Judul
  doc.setFontSize(18);
  doc.text("Run Tracker Dashboard", 105, 20, { align: "center" });

  // Tambahkan Statistik
  doc.setFontSize(14);
  doc.text("Summary", 20, 40);
  doc.text("Total Runs: 42", 20, 50);
  doc.text("Total Distance: 215 km", 20, 60);
  doc.text("Total Time: 35h 20m", 20, 70);
  doc.text("Calories Burned: 12,450 kcal", 20, 80);

  // Tambahkan Grafik (Opsional)
  const canvas = document.getElementById("runChart");
  const image = canvas.toDataURL("image/png", 1.0); // Konversi grafik ke base64
  doc.addImage(image, "PNG", 20, 90, 160, 90); // Tambahkan grafik ke PDF

  // Simpan File PDF
  doc.save("dashboard.pdf");
});
