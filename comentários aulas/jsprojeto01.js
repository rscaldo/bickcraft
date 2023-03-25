/**
 * 
 * AULA 01
 * 
 * 
INCLUIR O <script src="./js/script.js"></script> NO INDEX, TEMOS QUE ADICIONAR EM TODAS AS PAGINAS DO NOSSO PROJETO E PARA FACILITAR PODEMOS IR NO ICONE DE PESQUISA DO VSCODE E DIGITAR <script src="./js/script.js"></script>
</body>,  E ELE VAI RETORNAR TODAS AS PÁGINAS DO NOSSO PROJETO, DAI É SO SUBISTITUIR POR:
<script src="./js/script.js"></script>
<script src="./js/script.js"></script>
</body>

VERIFICAR SE TEMOS PAGINAS EM OUTRAS PASTAS E ARRUMAR O CAMINHO

VERIFICAR COM O consolo.log('teste") SE TUDO ESTA FUUNCIONANDO CERTINHO
 */

/**
 1)) MENU ATIVO > QUEREMOS QUE O MENU INDIQUE QUAL PAGINA DO SITE ESTA ATIVADA, VAMOS FAZER ISSO COM OVER EMBAIXO DO NOME DO MENU
 1.1)QUAL ELEMENTOS QUEREMOS VERIFICAR? OS LINKS DA PAGINA, PORTANTO TEMOS QUE SELECIONAR ELES
 SEMPRE VERIFICAR COM O console.log

 1.2)) AGORA QUEREMOS ATIVAR UMA FUNÇÃO PARA CADA UM DOS LINKS

 1.3)) ESCREVER A FUNÇÃO QUE VAI SER ATIVADA, DENTRO DELA VOU TER O ARGUMENTO DE CADA UM DOS LINKS QUE VOU PODER VERIFICAR, console.log PARA VERIFICAR SE ESTA PEGANDO OS LINKS

 1.4)) DENTRO DO LINK TEMOS A INFORMAÇÃO DO HREF(URL) E TENHO A INFO DA URL, QUEREMOS VERIFICAR SE A URL CONTEM A INFORMAÇÃO DO HREF, SE CONTER QUEREMOS ATIVAR
 URL>> PARA PEGAR A URL TEMOS UM OBJETO CHAMADO window.location(MAS QQ OBJETO QUE ESTA DENTRO DE window PODEMOS ACESSAR DIRETO SOMENTE DIGITANDO O NOME DO OBJETO location) location.href, conferir o resultado com console.log, O RETORNO É UMA STRING CONTENDO O URL DA PÁGINA

 1.5)) COMO ACHAMOS A INFORMAÇÃO DO LINK, A MESMA LOGICA, TEMOS UM OBJETO window.link.href QUE DA ESSA INFORMAÇÃO

 1.6))PRECISAMOS VERIFICAR QUE AS DUAS INFORMAÇÃO SÃO IGUAIS url E link, QUE SÃO AS VARIAVEIS QUE CRIAMOS

 PROBLEMA  >>> TEMOS ALGUMAS PAGINAS DO SITE QUE VÃO TER O ENDEREÇO DIFERENTE DO LINK COMO http://127.0.0.1:5500/bicicletas.html E http://127.0.0.1:5500/bicicletas/nimbus.html, ESTAMOS DENTRO DO LINK BICICLETAS MAS ESSA É UMA SUBPAGINA PORTANTO QUEREMOS QUE O MENU BICICLITAS AINDA ESTEJA ATIVO, PORTANTO NÃO PODEMOS COMPARAR NO if COM ===, TEMOS QUE BUSCAR OUTRA FORMA
 SOLUÇÃO   >>> EXISTE NA STRING UM METODO CHAMADO .includes, ESSE METODO VERIFICA SE AQUELA PALAVRA EXISTE OU NÃO NA STRINGS EXEMPLO:
 console.log('javascript'.includes('java')), ESTAMOS VERIFICANDO SE A PALAVRA 'java'  ESTA CONTIDA EM 'javascript', O RETORNO DEVE SER true

 1.7))AGORA ADICIONAMOS DENTRO DA CONDIÇÃO O QUE QUEREMOS QUE ACONTEÇA, NO CASO UMA ALTERAÇÃO NO STYLE
  link.classList.add('ativo') > ADICIONA UMA CLASSE QUANDO O LINK ESTA ATIVO, PODEMOS VERIFICAR DENTRO DO INSPECIONAR SE A CLASSE ESTA SENDO INCLUIDA NO LINK QUE ESTOVER CLICADO

  1.8)) APOS ISSO TEMOS QUE IR NO CSS E BUSCAR O LUGAR QUE QUEREMOS ALTERAR, NO CASO É O CSS header.css .header-menu a:hover:after > INCLUIR .header-menu a.ativo::after
 */

/**
   * 
   * AULA 02
   * 
   * 
   PROBLEMA>> OTIMIZAR A PAGINA DE COMPRA, QUANDO VOCE CLICA EM BICIQUETA ELA JÁ VAI SELECIONADA PARA A PAGINA DE COMPRA, PASSAR INFORMAÇÕES DA PAGINA DE BICICLIETAS PARA A PAGINA DE ORCAMENTO

   SOLUÇÃO > ATRAVES DO URL DA PAGINA PODEMOS FAZER ISSO, GERALMENTE

   2.1> TEMOS QUE MODIFICAR A URL DA PAGINA QUANDO CLICAMOS EM UMA OPÇÃO DE COMPRA DE BICICLETA OU DE SEGURO, PORTANTO EM VEZ DE SOMENTE IR SOMENTE PARA http://127.0.0.1:5500/orcamento.html QUANDO A GENTE CLICA EM UMA OPÇÃO TEM QUE FORNCER ALGO A MAIS NESSA URL, VAMOS PARA A PAGINA seguros.html e bicicletas.html,  LÁ BUSCAMOS OS imputs, NOS PARAMETROS DOS IMPUTS TEMOS O value, TEMOS QUE COLOCAR A STRING QUE ESTA NO value DENTRO DO HREF

   EXEMPLO PAGINA ORCAMENTO
  <input type="radio" name="tipo" value="seguro" id="seguro">
  <label for="seguro">Seguro</label>

  <input type="radio" name="produto" value="prata" id="prata">
  <label for="prata">Prata<span>R$ 199</span></label>

  AGORA IR PARA A PAGINA seguros.html E ALTERAR O href DO BOTÃO

    ANTES >>  <a class="botao secundario" href="./orcamento.html">Inscreva-se</a>

TEMOS QUE PEGAR O QUE VOCE DEFINIU NO VALUE
value="seguro"
value="prata"

    DEPOIS >> <a class="botao secundario" href="./orcamento.html?tipo=seguros&produto=prata">Inscreva-se</a>


    2.2 >> AGORA QUANDO A GENTE CLICA EM INSCREVA-SE DENTRO DA PAGINA seguro.html ELA DIRECIONA PARA O orcamento.html MAS COM AS INFORMAÇÕES ADICIONAIS QUE COLOCAMOS, SOMENTE ISSO NÃO ALTERA EM NADA, AGORA DENTRO DA PAGINA orcamento.html, TEMOS QUE RODAR O SCRIPT
   
    const parametros = location;
    console.log(parametros);

ESSE COMANDO NOS RETORNA UM OBJETO QUE POSSUI VARIOS PARAMETROS DENTRO DELE, UM DELES É O search QUE RETORNA EXATAMENTE OS DADOS QUE COLOCAMOS, PORTANTO PODEMOS COLOCAR

const parametros = location.search;
console.log(parametros);

E TEREMOS EXATAMENTE NOSSA INFORMAÇÃO, TEMOS UM METODO DENTRO DO JAVASCRIPT PARA FACILITAR NOSSA VIDA
new URLSearchParams() >> É NA VERDADE UMA CLASSE VAMOS VER MAIS PARA FRENTE, RESUMINDO ESSE METODO/CLASSE RETORNA UMA ARRAY COM OS PARAMETROS DE BUSCA QUE DEFINIMOS


const parametros = new URLSearchParams(location.search);
console.log(parametros);

PODEMOS VERIFICAR AS INFORMAÇÕES COM ALGUNS COMANDO PARA VER A INFORMAÇÃO DE FORMA MAIS INTUITIVA, COM ESSE COMANDO É COMO SE ESTIVESSEMOS FAZENDO UM LOOP PARA CADA PARAMETRO EXTRAIDO

function ativarProduto(parametro){
  console.log(parametro)
}

parametros.forEach(ativarProduto)

AGORA CONSEGUIMOS EXTRAIR EXATAMENTE AS INFORMAÇÕES QUE COLOCAMOS DENTRO DA URL

CODIGO FINAL DA PARTE 2.2
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  console.log(parametro);
}

parametros.forEach(ativarProduto);

2.3 > AGORA PRECISAMOS IR NO NOSSO HTML E BUSCAR UM ELEMENTO NO DOM(HTML) QUE POSSOEM ESSAS INFORMAÇÕES, PORTANTO COMO BUSCAMOS UM ELEMENTO QUE TEM parametro(NO EXEMPLO seguro E prata) COMO VALOR, NO NOSSO CASO PODEMOS BUSCAR PELO value OU PELO id, VAMOS FAZER PELO id

const elemento = document.getElementById(parametro)

ESSE CODIGO VAI BUSCAR NO HTML id COM AS PALAVRAS DENTRO DO parametro, NESSE CASO seguro E prata

2.4  >  AGORA COMO EU MUDO O ATRIBUTO DESSE ELEMENTO PARA CHECK QUE VAI DEIXAR O ELEMENTO CHECK NO DOM

elemento.checked = true >>TORNA O ELEMENTO CHECKADO NA PAGINA ASSIM QUE ABRIR

2.5 > PARA EVITAR UM PROBLEMA TEMOS QUE COMOCA RUMA CONDIÇÃO IF SE O PARAMETRO EXISTIR

if(elemento) >> ESSE COMANDO CONFERE SE ELEMENTO EXISTE


2.6 > AGORA PRECISAMOS MODIFICAR EM CADA UMA DAS BICICLETAS, BUSCAR NO BOTÃO DE COMPRA A PAGINA orçamento.html

   */

/**
 * 
 * 
 * AULA 3
 * 
 * 
 PROBLEMA >> QUEREMOS QUE A PESSOA TENHA A OPÇÃO DE CLICAR E APARECER O CONTEUDO E CLICAR E ESCONDER O CONTEUDO
 TEREMOS UM PROBLEMA COM A ACESSIBILIDADE PARA INFORMAR PARA O LEITOR DE TELE QUE ESTAMOS ESCONDENDO UM CONTEUDO

 TEMOS QUE ABRIR A PAGINA seguros.html, E O CSS ESPECIFICO DA PARTE DE PARGUNTAS perguntas.css, ALEM DO NOSSO script.js

 3.1 >> TEMOS UM PROBLEMA COM A ACESSIBILIDADE E A NOVA FUNCIONALIDADE QUE QUEREMOS IMPLEMENTAR NO SITE, POIS DO JEITO QUE O HMTL DO seguros.html  ESTA ESCRITO NÃO PODEMOS NAVEGAR COM O tab ENTRE AS PERGUNTAS, PARA SOLUCIONAR ESSE PROBLEMA TEMOS QUE ENVOLVER AS PERGUNTAS E RESPOSTAS EM UM BUTTON

 ANTES
        <div>
          <dt class="font-1-m-b">Qual forma de pagamento vocês aceitam?</dt>
          <dd class="font-2-s cor-9">Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</dd>
        </div>

  DEPOIS
        <div>
          <dt><button> forma de pagamento vocês aceitam?</button></dt>
          <dd class="font-2-s cor-9">Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</dd>
        </div>

  PROBLEMA: TEREMOS UM PROBLEMA POIS ASSIM QUE COLOCAR ENVOLVIDO EM UM BOTÃO ELE VAI HERDAR O STYLE DO BUTTON, PASSAR A CLASSE QUE ESTAVA NO dt PARA DIRETAMENTE NO BUTTON

 <dt><button class="font-1-m-b"> forma de pagamento vocês aceitam?</button></dt>


 3.2 > IR PARA O CSS perguntas.css  E ALTERAR O SELETOR, ANTES ESTAVA .perguntas dt{}; .perguntas dt:before;.perguntas dt:after; .perguntas dt:hover:after COLOCAR .perguntas button{}

 3.3 > AINDA NO perguntas.css TEMOS QUE ESTILIZAR ALGUMAS COISAS NO .pergunta button{} VAMOS LIMPAR OS STYLES PADROES QUE VEM COM O BUTTON

 APOS ESSAS ALTERAÇÕES PODEMOS NAVEGAR ATRAVES DO tab PELO CONTEUDO

 3.4 > EXISTEM MAIS COISAS QUE DEVEMOS REALIZAR NO seguros.html, VAMOS PRECISAR INFORMAR SE O CONTEUDO DELE ESTA EXPANDIDO OU NÃO ESTÁ EXPANDIDO, PARA ISSO TEMOS a PROPRIEDADE:
 aria-expanded=""
 TEMOS DENTRO DELA A OPÇÃO DE: "false", "true" e "indefined"

 VAMOS COMEÇAR COM O PRIMEIRO EXPANDIDO, PORTANTO TRUE
 <dt><button class="font-1-m-b" aria-expanded="true"> Qual forma de pagamento vocês aceitam?</button></dt>

 3.5 > TEMOS QUE INFORMAR TAMBEM QUAL ELEMENTO ESSE BUTTON ESTÁ CONTROLANDO, QUE NO NOSSO CASO VAI EXPANDIR E ESCONDER O CONTEUDO, PARA ISSO TEMOS UMA OUTRA PROPRIEDADE:
  aria-controls=""
  TEMOS DENTRO DELA TEMOS QUE COLOCAR O id DA TAG QUE ELA CONTROLA, PORTANTO TEMOS QUE ADICIONAR UM id EM CADA PERGUNTA

  <dt><button class="font-1-m-b" aria-controls="pergunta1" aria-expanded="true"> Qual forma de pagamento vocês aceitam?</button></dt>
          <dd class="font-2-s cor-9" id="pergunta1">Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</dd>
        </div>
  
  3.6 > REALIZAR PARA OS PROXIMOS ELEMENTOS, ALTERAR A PROPRIEDADE DO aria-expanded DOS OUTROS button PARA "false" E OS id TEM QUE SER DIFERENTE PARA CADA PERGUNTA

  3.7 > NA PRIMEIRA PERGUNTA TEMOS QUE ADICIONAR UMA CLASS ativa, QUE VAI SER ESSA CLASSE QUE VAMOS ADICIONAR E REMOVER PARA FICAR ATIVO OU NÃO

  3.8 > NO perguntas.css VAMOS COMEÇAR A STYLE, COLOCAMOS AS PERGUNTAS ESCONDIDAS NO COMEÇA E SOMENTE A QUE TIVER A CLASS ativa COMO display:block

  3.9 > TEMOS UMA SETA QUE FAZ A ROTAÇÃO QUANDO MOUSE PASSA, QUEREMOS QUE ESSA SETA FIQUE PARA BAIXO CASO O ELEMENTO ESTEJA ATIVO, O QUE INDICA SE ELE ESTA ATIVO É O aria-expanded="true"
  
  3.10 > PERGUNTAS FREQUENTES . VAMOS DENTRO DO NOSSO script.js
  QUAL ITEM QUE QUEREMOS QUE SELECIONAR PARA ADICIONAR UM EVENTO DE CLICK??
  QUEREMOS SELECIONAR TODOS OS button DENTRO DE .pergunta:

  const perguntas = document.querySelectorAll('.perguntas button')

  VEREFICANDO NO console.log TEM QUE RETORNAR UMA NODELIST COM 6 ITENS

  QUAL EVENTO QUE EU QUERO VERIFICAR? O EVENTO DE CLICK, PORTANTO EU VOU ADICONAR PARA CADA UM O EVENTO DE CLICK

  perguntas.forEach(eventosPerguntas)

  DEPOIS CRIAMOS A FUNÇÃO

  function eventosPerguntas(pergunta){
    console.log(pergunta)
  }

  ESSE CONSOLE VAI MOSTRAR A LISTA DE BUTTON 

  DENTRO DA FUNÇÃO eventosPerguntas QUERO ADICIONAR O EVENTO DE click EM pergunta E A FUNÇÃO QUE VAI ACORRER A pergunta QUANDO ACORRER O EVENTO DE click VAI SER ativarPergunta

  pergunta.addEventListener('click', ativarPergunta)

  AGORA TEMOS QUE DESENVOLVER A FUNÇÃO ativarPergunta, COMO A FUNÇÃO ativarPergunta ESTA DENTRO DE UM EVENTO TEMOS ACESSO AO PARAMETRO event

  function ativarPergunta(event){

  }

  QUEREMOS TER ACESSO AO ELEMENTO QUE ESTAMOS CLICANDO PORTANTO
  
  function ativarPergunta(event){
    const pergunta = event.currentTarget;
    console.log(pergunta)
  }

  ESSE CONSOLE ESTA MOSTRANDO OS ELEMENTOS QUE EU ESTOU CLICANDO
  AGORA PRECISAMOS ADICIONAR NO ELEMENTO QUE CLICAMOS A CLASSE DE ATIVO OU NÃO
  PROBLEMA: COMO EU RELACIONO O button COM A PERGUNTA QUE ESTA ABAIXO DELE??
  A PERGUNTA QUE ESTA ABAIXO DO button TEM O MESMO id DA aria-controls DO button
  > PARA INICIAR, QUANDO CLICAMOS NO button TEMOS QUE PUXAR O VALOR DE AREA CONTROL, COMO PUXAMOS UM VALOR DE UM ATRIBUTO???

  const controls = pergunta.getAttribute('aria-controls')
  console.log(controls)

  AGORA É SELECIONAR É SELECIONAR A id
  const resposta = document.getElementById(controls)
  console.log(resposta)

  AQUI COLOCAMOS constrols POIS ELE VAI BUSCAR NO NOSSO DOM UMA id IGUAL AO DA aria-controls QUE FOI SELECIONADA ANTERIORMENTE, A RESPOSTA DO console.log TEM QUE SER A TAG

  PARA ADICIONAR UMA CLASSE NA RESPOSTA, ativa PARA ELA APARECER AO CLICK

  resposta.classList.toggle('ativa')

  PROBLEMA: QUANDO CLICAMOS ELE JÁ ESTA ADICONANDO A class ativa NO ITEM MAS O aria-expended  AINDA ESTA COM A INFORMAÇÃO 'false'
  COMO PODEMOS MUDAR O aria-expended PARA true?
  SELECIONANDO ESSE ELEMENTO

  pergunta.setAttribute('ATRIBUTO QUE QUEREMOS MUDAR', 'NOVO VALOR')

  pergunta.setAttribute('aria-expanded', 'true')

  PROBLEMA: O aria-expended QUANDO FECHAMOS O BUTTON NÃO ESTA VOLTANDO PARA false PORTANTO PRECISAMOS DE UMA SOLUÇÃO QUE ADICIONE true QUANDO ABRE E ADICIONE false QUANDO FECHA.

  PODEMOS VERIFICAR SE resposta CONTEM A CLASSE ativa, SE POSSUIR EU ADICIONO AO aria-expended 'true' SE NÃO TIVER EU ADICIONO 'false'

  const ativa = resposta.classList.contains('ativa')

  PORTANTO
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", "true");

  AGORA PODEMOS SUBSTITUIR 
  pergunta.setAttribute("aria-expanded", "true");
  POR
  pergunta.setAttribute("aria-expanded", ativa);

 */

/**
 * 
 * AULA 4 > GALERIA IMAGENS
 * 
 * 
 4.1 - TEMOS UMA LISTA DE BICICLETAS, PORTANTO VAMOS PRECISAR SELECIONAR UMA LISTA E FALAR COM CADA UMA DELAS E TEMOS TAMBEM A GALERIA EM SI, QUE VAMOS TER QUE SELECIONAR TAMBEM. VAMOS COMEÇAR SELECINANDO A LISTA, QUEREMOS SELECIONAR CADA IMAGEM DENTRO DA LISTA

 const galeria = document.querySelectorAll('.bicicleta-imagens img)

 VAMOS TER QUE SELECIONAR O CONTAINER QUE CONTEM A GALERIA DE IMAGENS

 const galeriaContainer = document.querySelector('.bicicleta-imagens')

4.2 - ADICIONAMOS UM EVENTO DE CLICK

galeria.forEach(eventosGaleria) //SELECIONAMOS CADA UM DOS ELEMENTOS

4.3 - CRIAMOS A FUNÇÃO QUE TEM O EVENTO DE CLICK E AO CLICK VAMOS EXECUTAR A FUNÇÃO trocarImagem

function eventosGaleria(img){
  img.addEventlistener('click', trocarImagem)
}

4.4 - VAMOS DESENVOLVER A FUNÇÃO trocarImagem, ELA VAI OBSERVAR O ELEMENTO QUE ESTAMOS CLICANDO NO MOMENTO

function img = event.currentTarget;
 
4.5 - AGORA PRECISAMOS ALTERAR NO DOM PARA IR TROCANDO A IMAGEM, PARA ISSO TEMOS UM METODO CHAMADO 
.prepend() >> ESSE METODO REMOVE O ELEMENTO DE ONDE ELE ESTIVER E COLOCA ELE NA FRENTE

TEMOS QUE APLICAR ESSE MÉTODO DENTRO DE galeriaContainer

galeriaContainer.prepend(img)

REALIZANDO ESSE COMANDO NOSSA VARIAVEL img QUE É currentTarget VAI SER JOGADA COMO PRIMEIRA LINHA NA div bicicleta-imagems


PROBLEMA: NO RESPONSIVO DO NOSSO SITE NÃO ESTÁ LEGAL POIS AS FOTOS ESTÃO DO MESMO TAMANHO

SOLUÇÃO: NO JS VAMOS CRIAR UMA FUNÇÃO QUE SE A TELA ESTIVER COM MENOS DE 1000PX VAMOS ELIMINAR A FUNÇÃO DE TROCAR AS IMAGENS DA GALERIA

TEMOS O METODO window.matchMedia() ESSE METODO RECEBE UMA STRING, ESSA STRING VAI TER UMA MEDIA QUERY (COMO É UM METODO DENTRO DO window NOS NÃO PRECISAMOS COMEÇAR COM window PODE ESCREVER ESSE DIRETAMENTE)

matchMedia('(min-width: 1000px'))

PORTANTO ABAIXO DE 1000PX VAI ACONTECER ALGO, VAMOS VER O QUE TEM DENTRO DISSO, PARA VER SEMPRE PODEMOS COLOCAR DENTRO DE UMA VARIAVEL E DAR console.log

const media = matchMedia('(min-width: 1000px'))
console.log(media)

O RETORNO É UM MediaQueryList QUE É UM OBJETO ESPECÍFICO, QUE CONSTA A INFORMAÇÃO QUE COLOCAMOS EM PARENTESES E POSSUI TAMBEM matches: QUE PODE SER true OU false, ESSA PROPRIEDADE VERIFICA QUE A INFORMAÇÃO QUE PASSAMOS É VERDADEIRA OU FALSA

PORTANTO PODEMOS COLOCAR

const media = matchMedia('(min-width: 1000px')).matches

E DEPOIS ELABORAR UMA CONDIÇÃO PARA FAZER A VERIFICAÇÃO

if(media){
  galeriaContainer.prepend(img)
}

COLOCANDO DESSE JEITO TEMOS QUE SE media FOR true EXECUTA A CONDIÇÃO E TROCA A IMAGEM, A CONDIÇÃO É min-width: 1000px


5 >> PLUGIN ANIMAR

VAMOS APRENDER COMO USAR UM PLUGIN, ENTRAR NO ENDEREÇO github.com/origamid/simple-anime, TODOS OS ARQUIVOS QUE ESTÃO LÁ, FORAM OS NECESSÁRIOS PARA CONSTRUIR O PLUGIN MAS NÃO VAMOS PRECISAR DE TODOS PARA USAR NO SITE. PARA UTILIZAR O PLUGIN TEMOS QUE SEGUIR AS INSTRUÇÕES DO readme.md

COPIAR O ARQUIVO simple-anime PARA UMA PASTA PLUGINS DENTRO DE JS, FAZER O LINK DO PLUGIN NAS PAGINAS QUE VOCE VAI QUERER USAR

COLOCAR NO script.js A LINHA new SimpleAnime();

PROBLEMA: NÃO VAMOS UTILIZAR O PLUGIN EM TODAS AS PAGINAS E AS PAGINAS QUE A GENTE NÃO CARREGAR O src  DO PLUGIN DO DOM VAI DAR ERRO NO CONSOLE DO NOSSO JS. PORTANTO COMO EU FAÇO PARA O PLUGIN SÓ SER EXECUTADO QUANDO ESTIVER CARREGADO NA PAGINA

GERALMENTE PLUGINS SÃO CARREGADOS DENTRO DO window, PORTANTO PODEMOS VERIFICAR COM O CODIGO

if (window.SimpleAnime){
  new SimpleAnime()
}

SEGUINDO AS INSTRUÇÕES DO readme.md 

PRECISAMOS CRIAR UM ARQUIVO .css DENTRO DA PASTA UTILIDADES CHAMADO animacoes.css LÁ VAMOS JOGAR AS INFORMAÇÕES ESSENCIAIS PARA O FUNCIONAMENTO DO PLUGIN
LINKS NOVA PAGINA DO style.css
*/

/**
 * 
 * 
 * AULA 6 > UTILIZANDO PLUGIN EXTERNO, CRIADOS POR TERCEIROS
 * 
 * 
 VAMOS UTILIZAR O PLUGIN clipboardjs.com ESSE PLUGIN PERMITE COPIAR AUTOMATICAMENTE O CONTEUDO DE UM SITE, TEMOS QUE SEMPRE OLHAR NO GITHUB PARA VERIFICAR QUEM DESENVOLVEU ESSE PLUGIN E VERIFICAR O CÓDIGO

 */

/**
  * 
  * 
  * AULA 7 > DESABILITAR O JS CASO OCORRA ALGUM PROBLEMA NA HORA DE CARREGAR
  * 
  * 
  
  DENTRO DA FERRAMENTA DO DESENVOLVEDOR EXISTE EM CONFIGURAÇOES UMA OPÇÃO DE DESATIVAR O JS DO SITE, Disable JavaScript, ATIVANDO ESSA OPÇÃO PODEMOS VERIFICAR COMO NOSSO SITE FICARIA SE OCORRECE UM PROBLEMA NO JS. 

  PROBLEMA: ERROS COM NOSSO JS

  RESOLUÇÃO: PODEMOS NO INICIO DO NOSSO SITE, LOGO NO HEAD ADICIONAR UMA CLASSE AO HTML USANDO O JS, ISSO SIGNIFICA QUE ESSA CLASSE SÓ VAI SER CARREGADA SE O JS EXISTIR, PORTANTO NÃO VAI OCORRER CASO O JS EXISTA

  NO HTML ANTES DO FECHAMENTO DA TAG  <script>document.documentElement.classList.add('js')</script>
  </head> 

  <script>document.documentElement.classList.add('js')</script>
   <script>document.documentElement.classList.add('js')</script>
  </head>

  COLOCAR ESSE CODIGO PARA TODAS AS PAGINAS

  AGORA TEMOS QUE ALTERAR O CSS, TEMOS QUE ALTERAR O SEGUINTE CODIGO:
[data-anime] {
  opacity: 0;
}

.anime {
  opacity: 1;
  transform: none;
  transition: transform 0.8s, opacity 0.8s;
}

PARA

.js [data-anime] {
  opacity: 0;
}

.js .anime {
  opacity: 1;
  transform: none;
  transition: transform 0.8s, opacity 0.8s;
}


  ISSO SIGNIFICA QUE SÓ VAI REALIZAR DE TIVER js NA FRENTE
  */
