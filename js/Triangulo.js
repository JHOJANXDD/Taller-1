function triangulo(){
    let PrimerLado=parseInt(document.getElementById("PrimerLado").value);
    let SegundoLado=parseInt(document.getElementById("SegundoLado").value);
    let TercerLado=parseInt(document.getElementById("TercerLado").value);

    if (PrimerLado==SegundoLado && SegundoLado==TercerLado) {
        window.alert("Es un triangulo Equilatero");
    }
    else if (PrimerLado==TercerLado && PrimerLado==SegundoLado) {
        window.alert("Es un triangulo Equilatero");
    }
    else if (PrimerLado==SegundoLado && SegundoLado!=TercerLado) {
        window.alert("Es un triangulo isosceles");
    }
    else if (PrimerLado==TercerLado && PrimerLado!=TercerLado) {
        window.alert("Es un triangulo isosceles");
    }
    else if (PrimerLado==TercerLado && PrimerLado!=SegundoLado) {
        window.alert("Es un triangulo isosceles");
    }
    else if (PrimerLado!=SegundoLado && SegundoLado!=TercerLado) {
        window.alert("Es un triangulo Escaleno");
    }
    else if (TercerLado!=SegundoLado && PrimerLado!=TercerLado) {
        window.alert("Es un triangulo Escaleno");
    }
    else{
        alert("ERROR!!")
    }
}