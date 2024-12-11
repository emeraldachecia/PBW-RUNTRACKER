// Event untuk tombol Cancel
document.getElementById("cancelButton").addEventListener("click", function() {
    window.location.href = "/dashboard"; // Ganti '/dashboard' dengan URL halaman dashboard Anda
    });

  // Event untuk tombol Create
  document.getElementById("manualEntryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Data berhasil disimpan!"); // Simulasi submit, ganti dengan fungsi submit data
  });

  document.getElementById("jarak").addEventListener("input", function (event) {
    const jarakInput = document.getElementById("jarak");
    const errorMessage = document.getElementById("error-message");
    let value = jarakInput.value;
  
    // Validasi: hanya angka yang diperbolehkan, dan maksimal 99999
    if (!/^\d*$/.test(value) || parseInt(value, 10) > 99999) {
      // Jika tidak valid, tampilkan pesan dan hapus karakter terakhir
      jarakInput.value = value.slice(0, -1); // Menghapus karakter terakhir
      jarakInput.classList.add("invalid");
      errorMessage.style.display = "inline";
      errorMessage.textContent = "Input jarak hanya berupa angka maksimal 99,999";
    } else {
      // Jika valid, sembunyikan pesan kesalahan
      jarakInput.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  });
  