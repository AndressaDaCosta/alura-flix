var listaFilmes = [];
var listaNomes = [];
var count = 0;
var mensagem = document.getElementById("mensagem");

function adicionarFilme() {
  var filmeImagem = document.getElementById("filmeImagem").value;
  var filmeNome = document.getElementById("filmeNome").value;
  //pega valor no campo inserido
  if (filmeNome == "") {
    mensagem.innerHTML = "Insira o nome do filme!";
  } else {
    if (
      listaFilmes.includes(filmeImagem) ||
      listaNomes.includes(filmeNome.toLowerCase())
    ) {
      mensagem.innerHTML = "Este filme já se encontra no catálogo!";
    } else if (
      filmeImagem !== "" &&
      (filmeImagem.endsWith(".jpg") || filmeImagem.endsWith(".png"))
    ) {
      mensagem.innerHTML = "";
      listarFilmesNaTela(filmeImagem, filmeNome);
    } else {
      mensagem.innerHTML = "Endereço de filme inválido!";
    }
    limparCampo();
  }
}

function listarFilmesNaTela(filmeImagem, filmeNome) {
  listaFilmes.push(filmeImagem);
  listaNomes.push(filmeNome.toLowerCase());
  var elementoFilme =
    "<div class=filmesLista>" +
    `<id="index${count}" title="${filmeNome}"/>` +
    "<img src=" +
    filmeImagem +
    "><br>" +
    "<button class='apagarBotao'onClick='removerFilme(this)'>Apagar</button></div>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoFilme;
}

function removerFilme(apagarFilme) {
  listaFilmes.pop(filmeImagem);
  listaNomes.pop(filmeNome);
  apagarFilme.parentElement.remove();
}

function limparCampo() {
  document.getElementById("filmeImagem").value = "";
  document.getElementById("filmeNome").value = "";
}

/*for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
"https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
  "https://1.bp.blogspot.com/-ivvFa9z173A/WpDC39g8e0I/AAAAAAAAV-0/vyk0FonlysgkBovsQhPM8LRuvFyssOuNgCLcBGAs/s1600/A-chegad-the-arrival.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg",
  "http://www.intrinseca.com.br/blog/wp-content/uploads/2011/02/one-day-poster-web.jpg"
*/