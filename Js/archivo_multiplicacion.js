function EjecutarMultiplicacion(){
    let Numero_1 = document.getElementById("numero_1");
    let Numero_2 = document.getElementById("numero_2");
    let Multiplicar_Btn = document.getElementById("multiplicar_btn");
    let Cuerpo_Multplicación = document.getElementById("tabla_resultados");
    let td = document.createElement("td");
    var tabla = 0;
    var cantidad = 0;

    Multiplicar_Btn.addEventListener("click", function(e){
        e.preventDefault();
        tabla = Numero_1.value;
        cantidad = Numero_2.value;
        for (let i = 0; i <= cantidad; i++) {
            let fila = document.createElement("tr");
            let multiplos = document.createElement("td");
            let valor_Multiplos = document.createTextNode(" "+tabla+" x "+i);
            let resultado = document.createElement("td");
            let valor_resultado = document.createTextNode(tabla*i);
            multiplos.appendChild(valor_Multiplos);
            resultado.appendChild(valor_resultado);
            fila.appendChild(multiplos);
            fila.appendChild(resultado);
            fila.setAttribute("class","td_body");
            Cuerpo_Multplicación.setAttribute("class","table");
            Cuerpo_Multplicación.appendChild(fila);
        }
    }) 
}

function AplicarAnimacion_Menu(){
    let boton = document.getElementById("icono");
    let enlaces = document.getElementById("enlaces");
    let contador = 0;
    
    boton.addEventListener("click", function(e){
        e.preventDefault();
        if (contador == 0) {
            enlaces.className = ("enlaces dos")
            contador = 1;
        }
        else
        {
            enlaces.classList.remove("dos");
            enlaces.className = ("enlaces uno")
            contador=0;
        }
    })
}

EjecutarMultiplicacion();
AplicarAnimacion_Menu();