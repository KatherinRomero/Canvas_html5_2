window.onload=function(){
    //fondo degradado
    const archivoSelect = document.getElementById("archivo"); // ← ahora sí definido
    imagenselect=document.getElementById("archivo")
    let canvas = document.getElementById("canvas")//obtenemos el lienzo
    let ctx =canvas.getContext("2d")
    /*
    var gradiente=ctx.createLinearGradient(0,0,canvas.width,0)//variable de gradiente lineal
    gradiente.addColorStop(0,"green");
    gradiente.addColorStop(0.5,"white");
    gradiente.addColorStop(1,"red");

    ctx.fillStyle=gradiente
    ctx.fillRect(0,0,canvas.width,canvas.height)
    */

    //graadiante radial

    /*
    x1=canvas.width/2
    y1=canvas.height/2
    r1=10
    x2=canvas.width/2
    y2=canvas.height/2
    r2=300
    var gradiente=ctx.createRadialGradient(x1,y1,r1,x2,y2,r2)
    gradiente.addColorStop(0,"blue");
    gradiente.addColorStop(0.5,"white");
    gradiente.addColorStop(0.75,"pink");

    ctx.fillStyle=gradiente
    ctx.fillRect(0,0,canvas.width,canvas.height)
*/
    //patrones
    /*
 var estrella =new Image() //creamos un objeto imagen
 estrella.src="patron.png"
 estrella.onload=function(){//esperamos a que la imagen se cargue
    var patron=ctx.createPattern(estrella,"repeat")
    ctx.fillStyle=patron
    ctx.fillRect(0,0,canvas.width,canvas.height)
 }
*/
//imagres
/*
var imagen =new Image()
imagen.src="patron.png"
imagen.onload=function(){//esperamos a que la imagen se cargue
    procesarImagen()
}
function procesarImagen(){
    ctx.drawImage(imagen, 10, 10, 100, 100);//dibuja la imagen en el lienzo

    */
ctx.font="8em Verdana"
ctx.lineWidth=2//grosor del trazo
ctx.fillStyle="blue"
ctx.strokeStyle="red"

//sombra
ctx.shadowColor="black"
ctx.shadowOffsetX=5
ctx.shadowOffsetY=-5
ctx.shadowBlur=10

ctx.fillText("CANVAS",35,150)//dibuja el texto relleno
ctx.strokeText("CANVAS",35,150)//dibuja el texto con trazo
ctx.fillRect(35,150,10,10)//

    //imagen
    let imagen = new Image()
    imagen.src = "imagenes/patron.png"

    imagen.onload = function () {
        procesaImagen()
    }

    archivoSelect.onchange = function () {
        if (archivoSelect.value !== "") {
            imagen.src = archivoSelect.value     
            imagen.onload = function () {
                procesaImagen()
            }
        }
    }

    function procesaImagen() {
        limpiar()
        ctx.drawImage(imagen, 10, 10)
    }

    function limpiar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}