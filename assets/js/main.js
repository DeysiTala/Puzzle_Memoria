
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
var imagenes =[
	"assets/img/adventure-cat.png","assets/img/GitCover.png","assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png","assets/img/saketocat.png","assets/img/adventure-cat.png","assets/img/GitCover.png","assets/img/labo.png", "assets/img/minion.png",
	"assets/img/murakamicat.png","assets/img/saketocat.png"];

function createimg(){


	for(var i=0; i<imagenes.length; i++){
var imagn =document.getElementById("container");
//var filas = document.createElement("tr");
//filas.setAttribute("id","filitas");
//filas.classList.add("filass");

var fondo = document.getElementById("container");
//var fondito= document.createElement("img");
var fondito ="assets/img/OpenSource.png";
        
                                  
            

var tag_img =document.createElement("img");
tag_img.setAttribute('src',fondito);
tag_img.setAttribute("id",i);
tag_img.classList.add("picture");
		imagn.appendChild(tag_img);
		//tag_img.appendChild(fondito);

}

}
createimg();

function otherimage(e){

var cont_image = e.target;
 var imgId = cont_image.id;
 cont_image.src = imagenes[imgId];
}

var cont = document.getElementById("container");

cont.addEventListener("click",otherimage)














