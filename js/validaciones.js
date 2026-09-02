// ==========================================================
// Botones de "Añadir al carrito" en el Home (factory.io)
// ==========================================================

const btn1 = document.getElementById("btn-add-1");
if (btn1) {
  btn1.addEventListener("click", function () {
    document.getElementById("msg-cart-1").textContent = "¡Añadido con éxito!";
  });
}

const btn2 = document.getElementById("btn-add-2");
if (btn2) {
  btn2.addEventListener("click", function () {
    document.getElementById("msg-cart-2").textContent = "¡Añadido con éxito!";
  });
}

const btn3 = document.getElementById("btn-add-3");
if (btn3) {
  btn3.addEventListener("click", function () {
    document.getElementById("msg-cart-3").textContent = "¡Añadido con éxito!";
  });
}

const btn4 = document.getElementById("btn-add-4");
if (btn4) {
  btn4.addEventListener("click", function () {
    document.getElementById("msg-cart-4").textContent = "¡Añadido con éxito!";
  });
}