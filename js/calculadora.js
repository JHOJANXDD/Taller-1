function calculadora()
{
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let operation = document.getElementById('operaciones').value;
    
    if(operation === 'suma')
    {
        document.getElementById('resultado').value = (num1+num2);
    }
    
    if(operation === 'resta')
    {
        document.getElementById('resultado').value = (num1-num2);
    }
    
    if(operation === 'division')
    {
        document.getElementById('resultado').value = (num1/num2).toFixed(2);
    }
    
    if(operation === 'multiplicacion')
    {
        document.getElementById('resultado').value = (num1*num2);
    }
}

