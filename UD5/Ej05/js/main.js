function conversion(){
    var cuadro1 = document.getElementById("cuadroDolares").value;
    
    if(cuadro1 === ""){
        console.error("Error, el cuadro no debe estar vacío");
        // alert("Error, el cuadro no debe estar vacío");
    } else {
        cuadro1 = parseInt(cuadro1);
        if(isNaN(cuadro1)){
            console.error("Ingrese solo numeros");
            // alert("Ingrese solo numeros");
        }else{
            var res = cuadro1 * 0.93;
            cuadroEuros.value = res;
        }
    }
}
function comprobarTexto(){
    var cuadroTexto1var = document.getElementById("cuadroTexto1").value;
    if(cuadroTexto1var === ""){
        // console.error("Error, el cuadro no debe estar vacío");
        alert("Error, el cuadro no debe estar vacío");
    } else {
        if(cuadroTexto1var.includes('$') || cuadroTexto1var.includes('%') || cuadroTexto1var.includes('&')){
            alert("Error, la cadena contiene uno de los caracteres no permitidos");
        }else{
            var encabezado = document.getElementById("titulo");
            encabezado.textContent = "BUEN TRABAJO";
        }
    }
}
function colorF(){
    var color = document.getElementById("cuadroTexto2").value;
    document.body.style.backgroundColor = color;
}
function altoF(){
    var alto = document.getElementById("cuadroTexto2").value;
    
    if(alto === ""){
        console.error("Error, el cuadro no debe estar vacío");
        // alert("Error, el cuadro no debe estar vacío");
    } else {
        alto = parseInt(alto);
        if(isNaN(alto)){
            console.error("Ingrese solo numeros");
            // alert("Ingrese solo numeros");
        }else{
            var imagen = document.getElementById("mondongo");
            imagen.style.height = alto + "px";
        }
    }
}
function anchoF(){
    var ancho = document.getElementById("cuadroTexto2").value;
    
    if(ancho === ""){
        console.error("Error, el cuadro no debe estar vacío");
        // alert("Error, el cuadro no debe estar vacío");
    } else {
        ancho = parseInt(ancho);
        if(isNaN(ancho)){
            console.error("Ingrese solo numeros");
            // alert("Ingrese solo numeros");
        }else{
            var imagen = document.getElementById("mondongo");
            imagen.style.width = ancho + "px";
        }
    }
}
function textoAlternativoF(){
    var altImagen = document.getElementById("mondongo").alt;
    var cuadro2 = document.getElementById("cuadroTexto2").value;
    cuadro2.value = altImagen+'';
}