function calcularNotaTotal() {

    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));


    let notaTotal = (nota1 + nota2 + nota3) / 3;


    if (notaTotal >= 3.0) {
        console.log("Nota total:", notaTotal.toFixed(2), "- ¡Has ganado la materia!");
    } else {
        console.log("Nota total:", notaTotal.toFixed(2), "- Has reprobado la materia.");
    }
}

calcularNotaTotal();
