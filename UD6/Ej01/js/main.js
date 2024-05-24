

var fruteria2 = `{"Fruteria": [
    {"Fruta":
    [
    {"Nombre": "Manzana", "Cantidad": 10},
    {"Nombre": "Pera", "Cantidad": 20},
    {"Nombre": "Naranja", "Cantidad": 30}
    ]
    },
    {"Verdura": [
    {"Nombre": "Lechuga", "Cantidad": 80},
    {"Nombre": "Tomate", "Cantidad": 15},
    {"Nombre": "Pepino", "Cantidad": 50}
    ]
    }
    ]
    }`;
var obJs = JSON.parse(fruteria2);
console.log(obJs);
console.log(obJs.Fruteria[0].Fruta[2].Nombre);
console.log(obJs.Fruteria[1].Verdura[1].Cantidad);
