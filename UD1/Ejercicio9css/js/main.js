//constantes en js
// const MAX_NOTA = 10;
// var texto = "hola mundo";
// var array = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
// alert(array);



// var fruta = window.prompt("fruta");
// switch(fruta){
// case "naranja": 
//     console.log("naranjas cuestan 0,79 el kilo.");
//     break;
    
//     case "manzana":
//         console.log("manzanas cuestan 0,82 el kilo.");
//         break;
//     default:
//         console.log("");
        
// }



//1.
// var radio = window.prompt("dime el radio de tu circunferencia");
// var radio1 = parseInt(radio);
// var area = (radio1*radio1) * Math.PI; 
// console.log("El area es " + area);

//2.
// var num1 = window.prompt("dime un numero");
// var num2 = window.prompt("dime un numero");
// var num1_ = parseInt(num1);
// var num2_ = parseInt(num2);
// if(num1_ == num2_){
//     console.log("los dos números son iguales");

// } else if(num1_ > num2_){
//     console.log("el primer número es mayor que el segundo");
    
// } else if (num1_ < num2_){
//     console.log("el primer número es menor que el segundo");
    
// }

// 3.
// var num1 = window.prompt("dime un numero");
// var num1_ = parseInt(num1);
// if(num1_ % 2 == 0){
//     console.log("el numero es par");

// }else if (num1_ % 1 == 0){
//     console.log("el numero es impar");
    
// } 

// 4.
// var num1 = window.prompt("dime un numero");
// var num1_ = parseInt(num1);

// function factorial(numero) {
//     if (numero === 0 || numero === 1) {
//         categoria = 1;
//     } else {
//         categoria = numero * factorial(numero - 1);
//     }
// }

// var factorial = factorial(num1_);
// console.log("el factorial de" + num1_ + " es " + factorial );



// 5.
// var num1 = parseFloat(window.prompt("Ingrese el primer número:"));
// var num2 = parseFloat(window.prompt("Ingrese el segundo número:"));
// var num3 = parseFloat(window.prompt("Ingrese el tercer número:"));


// let menor, medio, mayor;

// if (num1 <= num2 && num1 <= num3) {
//     menor = num1;
//     if (num2 <= num3) {
//         medio = num2;
//         mayor = num3;
//     } else {
//         medio = num3;
//         mayor = num2;
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     menor = num2;
//     if (num1 <= num3) {
//         medio = num1;
//         mayor = num3;
//     } else {
//         medio = num3;
//         mayor = num1;
//     }
// } else {
//     menor = num3;
//     if (num1 <= num2) {
//         medio = num1;
//         mayor = num2;
//     } else {
//         medio = num2;
//         mayor = num1;
//     }
// }

// console.log("Números ordenados de menor a mayor:", menor, medio, mayor);

//6.

var nota = parseFloat(window.prompt("Ingresa la nota 0-10"));
var categoria;
switch (nota) {
    case nota >= 0 && nota < 5:
        categoria = "Insuficiente";
        break;
    case nota >= 5 && nota < 6:
        categoria = "Suficiente";
        break;
    case nota >= 6 && nota < 7:
        categoria = "Bien";
        break;
    case nota >= 7 && nota < 9:
        categoria = "Notable";
        break;
    case nota >= 9 && nota <= 10:
        categoria = "Sobresaliente";
        break;
    default:
        categoria = "test";
        break;
}

console.log("La nota "+nota+" es " + categoria);
console.log(categoria);