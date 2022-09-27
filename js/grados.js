function grados(){
    let tem=parseInt(document.getElementById("grados").value);
    let de=document.getElementById("de").value;
    let para=document.getElementById("para").value;
    if(de==1 && para==1){
        document.getElementById('resultado').value = (`ERROR`);
    }
    if(de==2 && para==2){
        document.getElementById('resultado').value = (`ERROR`);
    }
    if(de==3 && para==3){
        document.getElementById('resultado').value = (`ERROR`);
    }
    
    if(de==1 && para==2){
        document.getElementById('resultado').value = ((tem-32)/1.8);
    }
    if(de==1 && para==3){
        document.getElementById('resultado').value = ((tem-32)*5/9)+273.15;
    }
    if(de==2 && para==1){
        document.getElementById('resultado').value = (tem*9/5)+32;
    }
    if(de==2 && para==3){
        document.getElementById('resultado').value = tem+273.15;
    }
    if(de==3 && para==1){
        document.getElementById('resultado').value = ((tem-273.15)*9/5+32)+32;
    }
    if(de==3 && para==2){
        document.getElementById('resultado').value = tem+273.15;
    }

}