// tombol hitung BMI
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
    advice = "Perbanyak makan bergizi & olahraga teratur.";
    movePointer(0.1);
  } else if (bmi < 25) {
    category = "Normal";
    advice = "Pertahankan pola makan & gaya hidup sehat.";
    movePointer(0.35);
  } else if (bmi < 30) {
    category = "Overweight";
    advice = "Mulai atur pola makan & olahraga lebih rutin.";
    movePointer(0.65);
  } else {
    category = "Obese";
    advice = "Kurangi makanan tinggi lemak, rutin olahraga.";
    movePointer(0.9);
  }

  document.getElementById("bmi-result").textContent = "BMI: " + bmi.toFixed(1);
  document.getElementById("bmi-category").textContent = "Kategori: " + category;
  document.getElementById("bmi-advice").textContent = "Saran: " + advice;
}

// pindahin pointer di indikator
function movePointer(position) {
  var indicator = document.querySelector(".indicator");
  var pointer = document.getElementById("pointer");
  if (indicator && pointer) {
    var width = indicator.offsetWidth;
    pointer.style.left = (width * position - 8) + "px";
  }
}
