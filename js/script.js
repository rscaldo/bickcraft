//1.1
const links = document.querySelectorAll(".header-menu a");

//1.3
function ativarLink(link) {
  //1.4
  const url = location.href;
  //1.5
  const href = link.href;
  //1.6
  if (url.includes(href)) {
    //1.7
    link.classList.add("ativo");
    //1.8 NO CSS header.css
  }
}

//1.2
links.forEach(ativarLink);

//2.1 > seguros.html
//2.2
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  //2.3
  const elemento = document.getElementById(parametro);
  //2.5
  if (elemento) {
    //2.4
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

//3.1 >seguros.html
//3.2 >perguntas.css

//Perguntas frequentes
//3.10
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//GALERIA DE BICICLETAS
//4.1

const galeria = document.querySelectorAll(".bicicleta-imagens img");

const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//ANIMAÇÃO COM PLUGIN
if (window.SimpleAnime) {
  new SimpleAnime();
}
