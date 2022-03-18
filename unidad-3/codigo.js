metros = prompt("Cuantos metros tenes tenes que recorrer?");


if (metros >= 0 && metros < 1000) {
    alert("Podes ir a pie");
} else if (metros >= 1000 && metros < 10000) {
    alert("podes ir en bicicleta");
} else if (metros >= 10000 && metros < 30000) {
    alert("Podes ir a colectivo");
} else if (metros >= 30000 && metros < 100000) {
    alert("Pedeos ir en auto");
} else if (metros >= 100000 && metros < 1000000) {
    alert("Podes ir en avion");
} else {
    alert("Respuesta incorrecta");
}



for(i = 0;i <= 15; i++){
    document.write(i + "<br>")
}