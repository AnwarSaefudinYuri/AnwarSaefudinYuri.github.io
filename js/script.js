// // Mendapatkan elemen form dan input nama, email, dan pesan
// const form = document.querySelector("form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#message");

// // Fungsi untuk memeriksa validitas email
// function isValidEmail(email) {
//   // Regular expression untuk memeriksa format email
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// // Menambahkan event listener pada saat pengunjung submit form
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Menghentikan form dari mengirimkan data secara langsung

//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const message = messageInput.value.trim();

//   // Memeriksa apakah nama dan pesan tidak kosong
//   if (name === "" || message === "") {
//     alert("Nama, dan pesan tidak boleh kosong!");
//     return;
//   }

//   // Memeriksa apakah email valid
//   if (!isValidEmail(email)) {
//     alert("Alamat email tidak valid!");
//     emailInput.focus();
//     return;
//   }

//   // Jika semua input sudah valid, lakukan aksi selanjutnya, seperti mengirimkan email atau menyimpan data ke database
//   // Mengirim email
//   function sendEmail(e) {
//     e.preventDefault(); // Mencegah halaman refresh saat mengirim form

//     // Mengirim email menggunakan Formspree
//     fetch("https://formspree.io/f/xpzedezp", {
//       method: "POST",
//       body: new FormData(form),
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then(function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Email berhasil terkirim."); // Memberikan notifikasi bahwa email berhasil terkirim
//       })
//       .catch(function (error) {
//         console.log("FAILED...", error);
//         alert("Maaf, terjadi kesalahan saat mengirim email."); // Memberikan notifikasi bahwa email gagal terkirim
//       });
//   }

//   // Menambahkan event listener ke form
//   form.addEventListener("submit", sendEmail);
// });
