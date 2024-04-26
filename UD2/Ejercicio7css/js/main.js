
var opcion = parseFloat(window.prompt("1.Suma de tres numeros \n 2.Volumen de un cilindro \n 3.Area de un triangulo"));

switch (opcion) {
    case opcion = 1:
        var num1 = parseFloat(window.prompt("ingrese el num 1"));
        var num2 = parseFloat(window.prompt("ingrese el num 2"));
        var num3 = parseFloat(window.prompt("ingrese el num 3"));
        var resultado = uno(num1,num2,num3); 
        window.prompt("el resultado es "+ resultado);
        break;

    case opcion = 2:
        var radio = window.prompt("dime el radio de tu cilindro");
        var altura = window.prompt("dime la altura de tu cilindro");
        var resultado = volumen(radio,altura);
        window.prompt("el resultado es "+ resultado);
        break;
        
    case opcion = 3:
        var base = window.prompt("dime la base de tu triangulo");
        var altura = window.prompt("dime la altura de tu triangulo");
        var resultado = areaTriangulo(base,altura);
        window.prompt("el Area del triangulo es "+ resultado);
        break;

    default:
        break;
}


function uno(num1,num2,num3){
    var resultado = num1 + num2 + num3;
    return resultado;
}

function volumen(radio, altura){
    var radio1 = parseInt(radio);
    var altura1 = parseInt(altura);
    var volumen = Math.PI * altura1 * (radio1*radio1);
    return volumen;
}

function areaTriangulo(base,altura){
    var base1 = parseInt(base);
    var altura1 = parseInt(altura);
    var res = (base1*altura1)/2;
    return res;
}