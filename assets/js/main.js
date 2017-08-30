
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

function createimg(){

var imagenes =[
	"assets/img/adventure-cat.png","assets/img/GitCover.png","assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png","assets/img/saketocat.png","assets/img/adventure-cat.png","assets/img/GitCover.png","assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png","assets/img/saketocat.png"];
	for(var i=0; i<imagenes.length; i++){
var imagn =document.getElementById("container");
var filas = document.createElement("tr");
filas.setAttribute("id","filitas");
filas.classList.add("filass");

var fondo = document.getElementById("container");
var fondito= document.createElement("img");
fondito.src ="assets/img/OpenSource.png";
        
                                  
            

var tag_img =document.createElement("img");
tag_img.setAttribute('src',imagenes[i]);
tag_img.setAttribute("id","pictures");
tag_img.classList.add("picture");
		imagn.appendChild(tag_img);
		//tag_img.appendChild(fondito);

}

}
createimg();

/*
var imagenes =[
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/oso.jpg",
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/oso.jpg"];

	var mybody = document.getElementById("container");
	var table = document.createElement("table");
	var tableBody = document.createElement("tbody");



function tablitas(){
	for(var i=0; i<imagenes.length; i++){

		var filas = document.createElement("tr")
		var tag_img =document.createElement("img");
		
			for(var j=0; j<imagenes.length;j++){
			tag_img.setAttribute('src',imagenes[i][j]);

			var celda = document.createElement("td");
			filas.appendChild(celda);
			celda.appendChild(tag_img);

		
		table.appendChild(celda);
		}
	
		tableBody.appendChild(filas);

	}
table.appendChild(tableBody);

mybody.appendChild(table);


table.setAttribute("border","1");
}
	tablitas();


filas.onclick =function (){
if (document.getElementById("filitas").style.visibility="visible") {
	document.getElementById("filitas").style.visibility="hidden";
createTable();
}
}
*/