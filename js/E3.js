//solo id
console.log(document.getElementById("features"));
//solo la etiqueta especifica o id
console.log(document.querySelector(".features"));
//solo una lista 
console.log(document.querySelectorAll("p")[1]);
const $mi=document.querySelector("#features");
$mi.style.setProperty("color", "#FF0000");
$mi.style.setProperty("width", "500px");
console.log(document.querySelector('a').getAttribute('href'));
document.querySelector('a').setAttribute("href", "https://www.google.com.co/");

const $mic=document.querySelector("#DDO");
let texto=`<p>
el dom es bla bla
</p>
<p>
se puede acceder y modificar
</p>        
`
//$mic.textContent=texto
//$mic.innerHTML=text

const img=document.createElement("img");
img.src = "https://pbs.twimg.com/media/EyJCjGPWQA01c7v.jpg";

document.body.appendChild(img);

const $caja=document.createElement("div")
$caja.innerHTML="<img src=img/gragas.jpg>"

$mic.appendChild($caja);
$caja.remove();

