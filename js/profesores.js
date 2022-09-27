const rta=document.getElementById("Respuesta");
const btn=document.getElementById("Button");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    let nom = document.getElementById('Nombres');
    let ape = document.getElementById('Apellidos');
    let mat = document.getElementById('Materias');
    

    if (Nombres.value==Apellidos.value==Materias.value) {
        let texto=`<p><img src="img/Correcto.png" width="100px" height="100px"></p><br><h2>CORRECTO!!</h2>`
        rta.innerHTML=texto;
    } else{
        let texto=`<p><img src="img/Incorrecto.png" width="100px" height="100px"></p><br><h2>INCORRECTO!!</h2>`
        rta.innerHTML=texto;
    }
})