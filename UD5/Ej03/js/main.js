// var tabla8;
// for (let i = 0; i < 10; i++) {
//     tabla8 += i + " x 8 = " + i*8 + "\n"; 
// }
// alert(tabla8);




// var suma=0;
// var arraynums = [];
// var num;
// var factorial;
// do{
//     num = window.prompt("dime números para sacar su media, presiona q para salir");
//     if(!isNaN(num)){
//         num = parseInt(num);    
//         arraynums.push(num);
//     }
//     if(isNaN(num)){
//         if(num == "q"){
//             break;
//         }
//         alert("caracter invalido");
//     }
// }while(true);
// for (let i = 0; i < arraynums.length; i++) {
//     suma += arraynums[i];
// }
// factorial = suma / arraynums.length;
// alert(factorial);
// alert("Adivina el numero");
// var numMin
// var numMax
// do{
//     numMin = window.prompt("ingrese el numero minimo");
//     numMin = parseInt(numMin);
//     if(isNaN(numMin)){
//         alert("caracter ingresado no valido");
//     }else{
//         break;
//     }
// }while(true);
// do{
//     numMax = window.prompt("ingrese el numero maximo");
//     numMax = parseInt(numMax);
//     if(isNaN(numMax)){
//         alert("caracter ingresado no valido");
//     }else if(numMax < numMin) {
//         alert("El numero maximo no puede ser menor al minimo");
//     }else{
//         break;
//     }
// }while(true);
// var numAleatorio = Math.floor(Math.random() * (numMax - numMin + 1 )) + numMin;
// var cantidadIntentos = (numMax - numMin)/3;
// cantidadIntentos = parseInt(cantidadIntentos);   
// alert("tienes "+ cantidadIntentos + " intentos");
// var intento;
// alert(numAleatorio);
// for (let i = 0; i < cantidadIntentos; i++) {
//     do{
//         intento = window.prompt("cual es el número? , quedan: "+ (cantidadIntentos-i) +" intentos");
//         intento = parseInt(intento);
//         if(isNaN(intento)){
//             alert("intento no valido");
//         }else{
//             break;
//         }
//     }while(true);
//     if(intento > numAleatorio){
//         alert("El número introducido es mayor al ganador");
//     }else if(intento<numAleatorio){
//         alert("El número introducido es menor al ganador");
//     }else{
//         alert("Enorabuena! has ganado el juego de adivinar el número, el número ganador es: " + numAleatorio);
//         break;
//     }
//     if((cantidadIntentos-i-1) == 0 ){
//         alert("has perdido :(");
//         alert("el numero ganador era: " + numAleatorio);
//     }
// } 



var arraynums = [];
var cantidadNums;
var numMin
var numMax
alert("Ordena los numeros");
do{
    numMin = window.prompt("ingrese el numero minimo");
    numMin = parseInt(numMin);
    if(isNaN(numMin)){
        alert("caracter ingresado no valido");
    }else{
        break;
    }
}while(true);

do{
    numMax = window.prompt("ingrese el numero maximo");
    numMax = parseInt(numMax);
    if(isNaN(numMax)){
        alert("caracter ingresado no valido");
    }else if(numMax < numMin) {
        alert("El numero maximo no puede ser menor al minimo");
    }else{
        break;
    }
}while(true);

do{
    cantidadNums = window.prompt("ingrese la cantidad de numeros");
    cantidadNums = parseInt(cantidadNums);
    if(isNaN(cantidadNums)){
        alert("caracter ingresado no valido");
    }else{
        break;
    }
}while(true);

for (let i = 0; i < cantidadNums; i++) {
    var numAleatorio = Math.floor(Math.random() * (numMax - numMin + 1 )) + numMin;
    arraynums[i] = numAleatorio;
}


alert(arraynums);

function ordenar(arr, numMax) {
    var counts = [];
    var sortedArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    
    for (let i = 0; i < counts.length; i++) {
        while (counts[i] > 0) {
            sortedArr.push(i);
            counts[i]--;
        }
    }
    
    return sortedArr;
}

arraynums = ordenar(arraynums);
alert(arraynums);