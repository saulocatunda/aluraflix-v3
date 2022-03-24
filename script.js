var listaFilmes = [
  "https://br.web.img3.acsta.net/pictures/17/08/25/11/58/463146.jpg",
  "https://play-lh.googleusercontent.com/kI2RmwFHaRPROcONt4_AXi7tfJw_uSKZB3eyhJpPMBeJIgUj1SeHlBa_tQQbjfLahpi2_g",
  "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg"
];

// for (var i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + listaFilmes[i] + ">");
// }

// 1º Desafio
function showMovies() {
  //
  var newMovie = document.getElementById("name").value;
  listaFilmes.push(newMovie);
  // Não funciona no codepen
  location.reload(true);
}
// Não conheço nenhuma função que possa me ajudar neste momento.
function listar() {}
// Não criei o IF para verificar links iguais por não ter achado uma forma de atualizar a página sem desformatar o CSS.

listaFilmes.forEach((element) => document.write("<img src=" + element + ">"));