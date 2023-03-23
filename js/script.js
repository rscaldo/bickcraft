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
