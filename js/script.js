document.getElementById('preorderForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const hp = document.getElementById('hp').value.trim();
    const warna = document.getElementById('warna').value;
  
    if (!nama || !email || !hp || !warna) {
      alert('Harap isi semua field dengan benar.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email tidak valid.');
      return;
    }
  
    alert('Terima kasih telah melakukan pre-order!');
    document.getElementById('preorderForm').reset();
  });
  