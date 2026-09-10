// ===== NAVEGAÇÃO PARA HABILIDADES =====
const botaoHabilidades = document.getElementById("botao-habilidades");
const habilidades = document.getElementById("habilidades");

botaoHabilidades.addEventListener("click", function () {
    habilidades.scrollIntoView({ behavior: "smooth" });
});

// ===== VER MAIS / VER MENOS (Sobre) =====
const botaoVerMais = document.getElementById("btn-ver-mais");
const conteudoExtra = document.getElementById("conteudo-extra");
let mostrandoMais = false;

botaoVerMais.addEventListener("click", function () {

    if (!mostrandoMais) {

        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent =
            "Estou desenvolvendo projetos para praticar meus conhecimentos e construir meu portfólio profissional.";

        conteudoExtra.appendChild(novoParagrafo);
        botaoVerMais.textContent = "Ver menos";
        mostrandoMais = true;

    } else {

        conteudoExtra.innerHTML = "";
        botaoVerMais.textContent = "Ver mais";
        mostrandoMais = false;
    }
});

// ===== FORMULÁRIO DE CONTATO =====
const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

// Contador de caracteres da mensagem
mensagem.addEventListener("input", function () {
    contador.textContent = mensagem.value.length + " caracteres";
});

// Envio do formulário
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Nome:", nome.value);
    console.log("E-mail:", email.value);
    console.log("Assunto:", assunto.value);
    console.log("Mensagem:", mensagem.value);

    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

    formulario.reset();
    contador.textContent = "";
});

// texto de animação
const text = "Hello World! Eu sou Luiz Filipe :)"; // Seu texto aqui
const speed = 100; // Velocidade em milissegundos por letra
const element = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // Mantém o cursor piscando após terminar de digitar
    element.classList.add("blink-cursor");
  }
}

// Inicia a animação
typeWriter();
