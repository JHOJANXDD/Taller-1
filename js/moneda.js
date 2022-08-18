/*function lanzarmoneda(){
    let moneda = Math.floor((Math.random()* 2) +1);
    console.log(`El lanzamiento fue ${moneda}`);
}

lanzarmoneda();

function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2) +1);
    return moneda;
}

console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);

*/

let lanzar=function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1)
    return moneda;
}
let lanzamientio=lanzar();

/*function ganar(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}
*/
/*function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}
*/

let ganar=function(saldo, apuesta){
    saldo=saldo+(apuesta*2)
    return saldo;
}
ganar(1400,500);

let perder=(saldo, apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}
perder(1000, 500);

let seguir=true;
let saldo=0;
let jugador=prompt("Ingresa el nombre del jugador");
saldo=parseInt(prompt("Cuanto deseas recargar para jugar"));
while(seguir==true){
    let=eleccion=prompt(`${jugador} elige 1. Cara 2. Sello`);
    let=apuesta=parseInt(prompt(`De tu saldo actual ${saldo}. ¿cuanto Deseas apostar?`));
    let=lanzamiento=lanzar();
    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(ganar, apuesta);
        console.log(`El lanzamientio fue cara escogiste cara. Tu ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo, apuesta);
        console.log(`El lanzamientio fue sello escogiste sello. Tu ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamientio fue cara escogiste sello. Perdiste!!, tu nuevo saldo es ${saldo}`); 
    }
    else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamientio fue sello escogiste cara. Perdiste!!, tu nuevo saldo es ${saldo}`);
    }

    seguir=confirm("¿Desea Continuar?");
}