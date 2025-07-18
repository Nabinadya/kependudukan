document.getElementById("pendudukForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nik = document.getElementById("nik").value.trim();
    if (nik.length !== 16 || isNaN(nik)) {
      alert("NIK harus 16 digit angka.");
      return;
    }
  
    const data = {
      NIK: nik,
      Nama: document.getElementById("nama").value.trim(),
      TempatLahir: document.getElementById("tempat").value.trim(),
      TanggalLahir: document.getElementById("tanggal").value,
      JenisKelamin: document.getElementById("jk").value,
      Agama: document.getElementById("agama").value.trim(),
      Pekerjaan: document.getElementById("pekerjaan").value.trim(),
      StatusPerkawinan: document.getElementById("status").value,
      Kewarganegaraan: document.getElementById("kewarganegaraan").value.trim(),
      GolonganDarah: document.getElementById("goldarah").value,
      StatusHidup: document.getElementById("statushidup").value
    };
  
    // Sementara hanya ditampilkan di konsol
    console.log("Data Disimpan:", data);
    document.getElementById("message").textContent = "Data berhasil disimpan!";
    document.getElementById("pendudukForm").reset();
  });

  