// tombol hitung BMI
document.addEventListener("DOMContentLoaded", function() {
  var calculateBtn = document.getElementById("calculate");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateBMI);
  }
});

function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100;

  if (!weight || !height) {
    alert("Masukkan berat dan tinggi dengan benar!");
    return;
  }

  var bmi = weight / (height * height);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    movePointer(0.1);
  } else if (bmi < 25) {
    category = "Normal";
    movePointer(0.35);
  } else if (bmi < 30) {
    category = "Overweight";
    movePointer(0.65);
  } else {
    category = "Obese";
    movePointer(0.9);
  }

  document.getElementById("bmi-result").textContent = "BMI: " + bmi.toFixed(1);
  document.getElementById("bmi-category").textContent = "Kategori: " + category;
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
