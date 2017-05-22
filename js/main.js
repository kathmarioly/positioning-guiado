//traemos los elementos que necesitamos//
var contenedor = document.getElementsByClassName("contenedor")[0];
var rosa = document.getElementById("rosa")
var azul = document.getElementById("azul")
var verde = document.getElementById("verde")
var amarillo = document.getElementById("amarillo")

//definiendo las propiedades de la caja.//
contenedor.style.position = "relative";
contenedor.style.background ="DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

/* Le damos las propiedades CSS a la caja azul,
que es la que queremos posicionar*/

azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0";

/* Se le asigna 250px de distancia del top, porque
sumamos los 200px de alto de la caja rosa, más los 50px
de padding que le añadimos al contenedor. */