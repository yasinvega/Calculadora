

var botones = document.getElementsByTagName("button");
for(var i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", calculo);
}


                                var suma = 0;
var valor1 = 0;                 var resta = 0;
var valor2 = 0;                 var multiplicacion = 0;
var operador = "";              var division = 0;

function calculo(e){
    
    var pulsado = e.target.id; 
    
    if((pulsado >= 0) || (pulsado < 10)){
        document.getElementById("pantalla").value += pulsado;
    }else if((pulsado == "/") || (pulsado == "X") || (pulsado == "-") || (pulsado == "+") || (pulsado == "=") || (pulsado == "C")){   
        if(pulsado == "C"){
            valor1 = 0;  
            valor2 = 0; 
            document.getElementById("pantalla").value = "";
        }
        if(pulsado == "+"){
            valor1 = parseInt(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = "";
            operador = "s";
        }
        if(pulsado == "-"){
            valor1 = parseInt(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = "";
            operador = "r";
        }
        if(pulsado == "X"){
            valor1 = parseInt(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = "";
            operador = "m";
        }
        if(pulsado == "/"){
            valor1 = parseInt(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = "";
            operador = "d";
        }

        if(pulsado == "="){
            console.log("entra a =");
            console.log(operador);
            console.log(valor1);
            if(operador == "s"){
                valor2 = parseInt(document.getElementById("pantalla").value);
                suma = valor1 + valor2;
                console.log(valor1);
                console.log(valor2);
                document.getElementById("pantalla").value = suma;
            }
            if(operador == "r"){
                valor2 = parseInt(document.getElementById("pantalla").value);
                resta = valor1 - valor2;
                document.getElementById("pantalla").value = resta;
            }
            if(operador == "m"){
                valor2 = parseInt(document.getElementById("pantalla").value);
                multiplicacion = valor1 * valor2;
                document.getElementById("pantalla").value = multiplicacion;
            }
            if(operador == "d"){
                valor2 = parseInt(document.getElementById("pantalla").value);
                division = valor1 / valor2;
                division.getElementById("pantalla").value = division;
            }
        }
    }
}
