
function createTable(){
var imagenes =[
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/img/oso.jpg",
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/img/oso.jpg","assets/img/pig.jpg"]

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
		

		celda.appendChild(tag_img);
		filas.appendChild(celda);
		table.appendChild(celda);

	}
//table.appendChild(tableBody);
//table.setAttribute("border","1");
}
createTable();

/*function createimg(){

	var imagenes =[
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/oso.jpg",
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/oso.jpg"]

	for(var i=0; i<imagenes.length; i++){
var imagn =document.getElementById("container")
var filas = document.createElement("tr")
var tag_img =document.createElement("img");
tag_img.setAttribute('src',imagenes[i]);
		imagn.appendChild(tag_img);
}
}
createimg();*/


/*var imagenes =[
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/oso.jpg",
	"assets/img/canguro.jpg","assets/img/koala.jpg","assets/oso.jpg"]

	var mybody = document.getElementById("container");
	var table = document.createElement("table");
	var tableBody = document.createElement("tbody");

	for(var i=0; i<imagenes.length; i++){

		var filas = document.createElement("tr")
		var tag_img =document.createElement("img");
		tag_img.setAttribute('src',imagenes[i]);

			for(var j=0; j<imagenes.length;j++){

			var celda = document.createElement("td");
			filas.appendChild(celda);
			celda.appendChild(tag_img);

		filas.appendChild(celda);
		table.appendChild(celda);
		}
	
		tableBody.appendChild(filas);

	}
table.appendChild(tableBody);

mybody.appendChild(table);


table.setAttribute("border","1");*/


filas.onclick =function (){
if (document.getElementById("filitas").style.visibility="visible") {
	document.getElementById("filitas").style.visibility="hidden";
createTable();
}
}