document.addEventListener("DOMContentLoaded", function() {
  var calculateBtn = document.getElementById("calculate");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateBMI);
  }
});

function calculateBMI() {
  var gender = document.querySelector("input[name='gender']:checked");
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100;

  if (!gender) {
    alert("Pilih jenis kelamin terlebih dahulu!");
    return;
  }

  if (!weight || !height) {
    alert("Masukkan berat dan tinggi dengan benar!");
    return;
  } 

  var bmi = weight / (height * height);
  var category = "";
  var advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    advice = `
      <strong>Saran tambahan:</strong>
      <ul>
        <li>Meningkatkan konsumsi kalori dari makanan bergizi seimbang (nasi, roti gandum, kentang).</li>
        <li>Menambahkan protein (telur, ayam, ikan, tahu, tempe).</li>
        <li>Latihan beban ringan bisa bantu tambah massa otot.</li>
        <li>Konsultasikan dengan ahli gizi jika sulit menaikkan berat badan.</li>
      </ul>
    `;
    movePointer(0.1);
  } else if (bmi < 25) {
    category = "Normal";
    advice = `
      <strong>Saran tambahan:</strong>
      <ul>
        <li>Pertahankan pola makan seimbang dengan sayur, buah, protein, dan karbohidrat kompleks.</li>
        <li>Olahraga minimal 30 menit, 3–5 kali seminggu.</li>
        <li>Minum air putih cukup (2 liter per hari).</li>
        <li>Menjaga pola tidur teratur (7–8 jam per malam).</li>
        <li>Menghindari stres berlebihan karena bisa memengaruhi berat badan.</li>
      </ul>
    `;
    movePointer(0.35);
  } else if (bmi < 30) {
    category = "Overweight";
    advice = `
      <strong>Saran tambahan:</strong>
      <ul>
        <li>Mengurangi makanan tinggi gula & lemak jenuh (fast food, gorengan, minuman manis).</li>
        <li>Meningkatkan aktivitas fisik: jalan kaki, bersepeda, jogging.</li>
        <li>Memperbanyak konsumsi sayur & buah untuk serat.</li>
        <li>Menggunakan piring kecil agar porsi lebih terkontrol.</li>
      </ul>
    `;
    movePointer(0.65);
  } else {
    category = "Obese";
    advice = `
      <strong>Saran tambahan:</strong>
      <ul>
        <li>Mengatur pola makan dengan defisit kalori secara sehat.</li>
        <li>Fokus ke makanan whole food (beras merah, sayur, buah, protein tanpa lemak).</li>
        <li>Lakukan olahraga teratur, mulai dari low impact (jalan, berenang) lalu bertahap.</li>
        <li>Membatasi makanan olahan dan tinggi sodium.</li>
        <li>Mempertimbangkan konsultasi dengan dokter/ahli gizi untuk program penurunan berat badan.</li>
      </ul>
    `;
    movePointer(0.9);
  }

  document.getElementById("bmi-result").textContent = "BMI: " + bmi.toFixed(1);
  document.getElementById("bmi-category").textContent = "Kategori: " + category;
  document.getElementById("bmi-advice").innerHTML = advice;
}

function movePointer(position) {
  var indicator = document.querySelector(".indicator");
  var pointer = document.getElementById("pointer");
  if (indicator && pointer) {
    var width = indicator.offsetWidth;
    pointer.style.left = (width * position - 8) + "px";
  }
}