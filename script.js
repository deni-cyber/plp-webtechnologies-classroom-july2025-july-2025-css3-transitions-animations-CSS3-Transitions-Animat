/* --- Part 2: Functions & Scope --- */
let globalMessage = "Global scope available!";

function changeText(message) {
  // local variable
  let output = document.getElementById("output");
  output.textContent = message + " | " + globalMessage;
}

function sum(a, b) {
  return a + b;
}
function calculate() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = sum(n1, n2);
  document.getElementById("sumResult").textContent = "Result: " + result;
}

/* --- Part 3: JS + CSS Animations --- */
// Bounce Box
function animateBox() {
  let box = document.getElementById("box");
  box.classList.remove("animate");
  void box.offsetWidth; // restart trick
  box.classList.add("animate");
}

// Card Flip
function flipCard() {
  document.getElementById("cardInner").classList.toggle("flipped");
}

// Loader
function toggleLoader() {
  let loader = document.getElementById("loader");
  loader.style.display = (loader.style.display === "block") ? "none" : "block";
}

// Modal
let overlay = document.getElementById("overlay");
function openModal() {
  overlay.style.display = "flex";
  overlay.classList.remove("hide");
  overlay.classList.add("show");
}
function closeModal() {
  overlay.classList.remove("show");
  overlay.classList.add("hide");
  setTimeout(() => overlay.style.display = "none", 500);
}
