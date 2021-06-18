// BOTAO CONTA SUBSTITUI BOTAO LOGIN, ADAPTADO DOS QUARTOS DO MEU MINI-PROJETO
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pativo = urlParams.get('login');
if (pativo === "iniciado") {
    document.getElementById("sobrenavbottom").href = "sobre.html?login=iniciado";
    document.getElementById("indexnavbottom").href = "index.html?login=iniciado";
    document.getElementById("catalogonavbottom").href = "catalogo.html?login=iniciado";
    document.getElementById("loginnavbottom").classList.add("d-none");
    document.getElementById("contanavbottom").classList.remove("d-none");
    document.getElementById("vendernavbottom").classList.remove("d-none");
    document.getElementById("entrar").classList.add("d-none");
    document.getElementById("perfil").classList.remove("d-none");
    document.getElementById("vender").classList.remove("d-none");
    document.getElementById("indexLogin").href = "index.html?login=iniciado";
    document.getElementById("catalogoLogin").href = "catalogo.html?login=iniciado";
    document.getElementById("sobreLogin").href = "sobre.html?login=iniciado";
    document.getElementById("venderLogin").href = "vender.html";
}

//MODAL SÓ APARECE SE TUDO ESTIVER PREENCHIDO
$('#formReserva').on('submit', function (e) {

    e.preventDefault(); //stop submit

    if ($('#myCheck').is(':checked')) {
        //Check if checkbox is checked then show modal
        $('#modalEstaCertooo').modal('show');
    }
});

//INPUTS COM INFORMAÇÕES PREENCHIDAS PELO UTILIZADOR JA ESTAO PREENCHIDAS - PODEM SER ALTERADAS
$(document).ready(function () {
    $("#inputCity").val('Aveiro');
    $("#nomeproprio").val('Mariana Duarte');
    $("#inputAddress").val('Rua António da Benta, 8');
    $("#telemovel").val('(+351) 963560624');
    $("#inputZip").val('3800-250');

});

// FOTO ALEATORIA LOGIN E REGISTAR
var images = ['vender.jpg', 'bglogin2.jpg', 'bglogin3.jpg'];
$('.fotologin').css({'background-image': 'url(imgs/' + images[Math.floor(Math.random() * images.length)] + ')'});