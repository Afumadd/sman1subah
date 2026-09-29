function validasiForm(event) {
    // Mencegah biar ga kosong
    event.preventDefault();

    // Nilai dari form
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    // Cek ada yang kosong/tida
    if (nama === "" || email === "" || pesan === "") {
        alert("Peringatan: Semua kolom (Nama, Email, dan Pesan)");
        return false;
    }

    // Biar nama tidak mengandung angka
    if (/\d/.test(nama)) {
        alert("Nama tidak boleh mengandung angka!");
        return false;
    }

    // Biar email wajib pake @
    if (!email.includes("@")) {
        alert("Format email tidak valid! Harap sertakan tanda '@'.");
        return false;
    }

    // Jika sesuai
    alert("Terima kasih, " + nama + "! Pesan Anda berhasil dikirim.");
    
    // Ngereset
    document.getElementById("formKontak").reset();
    return true;
}