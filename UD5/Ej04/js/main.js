function juegoPiedraPapelTijeras() {
    var opciones = ["piedra", "papel", "tijeras"];
    
    var eleccionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    
    if (opciones.indexOf(eleccionUsuario) === -1) {
        alert("Por favor, elige una opción válida: piedra, papel o tijeras.");
        return;
    }
    
    var eleccionOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
    
    alert("La Ordenador eligió: " + eleccionOrdenador);
    
    if (eleccionUsuario === eleccionOrdenador) {
        alert("¡Es un empate!");
    } else if (
        (eleccionUsuario === "piedra" && eleccionOrdenador === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionOrdenador === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionOrdenador === "papel")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("¡Perdiste! La Ordenador gana esta vez.");
    }
}
do{
    juegoPiedraPapelTijeras();
    var respuesta = window.prompt("Quieres seguir jugando? s/n");
    if(respuesta =='n'||respuesta =='no'||respuesta =='No'||respuesta =='N'||respuesta =='NO'){
        break;
    }
}while(true);
