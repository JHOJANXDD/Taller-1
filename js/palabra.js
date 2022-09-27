function palabra(){
    let op= document.getElementById("opciones").value;
    let pal= document.getElementById("palabra").value;

    if(op=='calcular_Longitud'){
        window.alert("La longitud de la palabra es de: "+pal.length);
    }
    if(op=='convertir_mayuscula'){
        window.alert("La palabra convertida a mayusculas: "+pal.toUpperCase());
    }
    if(op=='convertir_minusculas'){
        window.alert("La palabra convertida a minusculas: "+pal.toLowerCase());
    }
    if(op=='elegir_primercaracter'){
        window.alert("La primera letra es: "+pal.chartAt(0));
    }   
}