/**
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
