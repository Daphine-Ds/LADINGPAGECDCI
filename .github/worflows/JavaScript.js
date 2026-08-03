// =========================
// MENU MOBILE
// =========================

const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

// =========================
// FAQ
// =========================

const perguntas = document.querySelectorAll(".faq-btn");

perguntas.forEach((botao) => {
  botao.addEventListener("click", () => {
    const resposta = botao.nextElementSibling;

    if (resposta.style.display === "block") {
      resposta.style.display = "none";
    } else {
      resposta.style.display = "block";
    }
  });
});

// Esconde as respostas ao carregar

document.querySelectorAll(".resposta").forEach((item) => {
  item.style.display = "none";
});

// =========================
// CONTADORES
// =========================

function contador(id, valorFinal) {
  let numero = 0;

  const elemento = document.getElementById(id);

  const intervalo = setInterval(() => {
    numero++;

    elemento.innerHTML = numero;

    if (numero >= valorFinal) {
      clearInterval(intervalo);
    }
  }, 20);
}

window.addEventListener("load", () => {
  contador("contador1", 120);

  contador("contador2", 85);

  contador("contador3", 350);
});

// =========================
// FORMULÁRIO
// =========================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos.");

    return;
  }

  alert("Mensagem enviada com sucesso!");

  formulario.reset();
});

// =========================
// BOTÃO TOPO
// =========================

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topo.style.display = "block";
  } else {
    topo.style.display = "none";
  }
});

topo.style.display = "none";

topo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
