/*function createTable(){
var imagenes =[
	"assets/img/adventure-cat.png","assets/img/GitCover.png","assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png","assets/img/saketocat.png","assets/img/adventure-cat.png","assets/img/GitCover.png","assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png","assets/img/saketocat.png"]

	var mybody = document.getElementById("container");
	var table = document.createElement("table");
	mybody.appendChild(table);

	//var tableBody = document.createElement("tbody");

	for(var i=0; i<imagenes.length; i++){

		var filas = document.createElement("tr");
		filas.setAttribute("div", "filitas");
		var celda = document.createElement("td");
		var tag_img =document.createElement("img");
		tag_img.setAttribute('src',imagenes[i]);
		table.setAttribute("border","1");

		celda.appendChild(tag_img);
		filas.appendChild(celda);
		table.appendChild(celda);

	}
//table.appendChild(tableBody);
//table.setAttribute("border","1");
}
createTable();*/

/*function imagenFondo(){
	var imagencita=["assets/img/OpenSource.png"];

	for(var i=0; i<imagencita.length; i++){
var imagn =document.getElementById("container");
var filas = document.createElement("tr");
filas.setAttribute("id","filitas");
filas.classList.add("filass");

/*var fondo = document.getElementById("container");
var fondito= document.createElement("img");
fondito.src ="assets/img/OpenSource.png";
        
                           
            

var tag_img =document.createElement("img");
tag_img.setAttribute('src',imagencita[i]);
tag_img.setAttribute("id","pictures");
tag_img.classList.add("picture");
		imagn.appendChild(tag_img);


}
}*/
var imagenes = [
	"assets/img/adventure-cat.png", "assets/img/GitCover.png", "assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png", "assets/img/saketocat.png", "assets/img/adventure-cat.png", "assets/img/GitCover.png", "assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png", "assets/img/saketocat.png"
];
var fondito;

function createimg() {


	for (var i = 0; i < imagenes.length; i++) {
		var imagn = document.getElementById("container");
		var fondo = document.getElementById("container");
		fondito = "assets/img/OpenSource.png";



		var tag_img = document.createElement("img");
		tag_img.setAttribute('src', fondito);
		tag_img.setAttribute("id", i);
		tag_img.classList.add("picture");
		imagn.appendChild(tag_img);
		//tag_img.appendChild(fondito);

	}

}
createimg();
//cambio de imagenes
var contadorClick = 0;
var imagenAnterior;
var idimagenAnterior;
function otherimage(e) {

	var cont_image = e.target;
	var imgId = cont_image.id;
	cont_image.src = imagenes[imgId];
	contadorClick++;
	console.log(contadorClick);
	if (contadorClick == 1) {
		imagenAnterior = cont_image.src;//enlace de la imagen
		idimagenAnterior = cont_image.id;//buscamos el id
	} else if (contadorClick == 2) {
		console.log(contadorClick);
		contadorClick = 0;
		if (imagenAnterior == cont_image.src) {
			
			console.log("iguales");
		} else {
			//console.log(imagenAnterior);
			//console.log(cont_image);
			setTimeout(function() {
				console.log("no son iguales")
				cont_image.src = fondito;
				var elementoAnterior = document.getElementById(idimagenAnterior);
				elementoAnterior.removeAttribute('src');
				elementoAnterior.src = fondito;
			}, 2000);

		}
	}

}

var cont = document.getElementById("container");
cont.addEventListener("click", otherimage);