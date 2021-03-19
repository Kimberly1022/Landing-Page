$(document).ready(function(){
    $("#cedula").mask("000-0000000-0");
});

const expresiones = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{3,40}$/,  //Letras y espacios, las letras pueden tener acentos. 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,   
    cedula: /^[\d{3}]+-[\d{7}]+-[\d{1}]+$/ //11Numeros.   
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    email: false
}

const ValidarCampos = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(''+campo+'_group').classList.remove('form__group-incorrecto');
        document.getElementById(''+campo+'_group').classList.add('form__group-correcto');
        document.querySelector('#'+campo+'_group i').classList.add('fa-check-circle');
        document.querySelector('#'+campo+'_group i').classList.remove('fa-times-circle');
        document.querySelector('#'+campo+'_group .form__input-error').classList.remove('form__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(''+campo+'_group').classList.add('form__group-incorrecto');
        document.getElementById(''+campo+'_group').classList.remove('form__group-correcto');
        document.querySelector('#'+campo+'_group i').classList.remove('fa-check-circle');
        document.querySelector('#'+campo+'_group i').classList.add('fa-times-circle');
        document.querySelector('#'+campo+'_group .form__input-error').classList.add('form__input-error-activo');
        campos[campo] = false;
    }
}

const formulario = document.getElementById("MyForm");

const inputs = document.querySelectorAll('#MyForm input');




function Enviar_Formulario(){

    const validarForm = (e) =>{
        switch (e.target.name) {
            case "nombre":
                    ValidarCampos(expresiones.nombre, e.target, 'nombre');
                break;
            case "apellido":
                ValidarCampos(expresiones.nombre, e.target, 'apellido'); 
                break;
            case "email":
                ValidarCampos(expresiones.correo, e. target, 'email'); 
                break;
            case "cedula":
                ValidarCampos(expresiones.cedula, e.target, 'cedula');
                break;   
        } 
    }
    
    inputs.forEach((input)=>{
        input.addEventListener('keyup', validarForm);
        input.addEventListener('blur', validarForm);
    });
    
    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();   
        if (campos.nombre && campos.apellido && campos.email && campos.cedula) {
            formulario.reset();

            document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
            setTimeout(()=>{
                document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
            }, 5000);
            document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');
            document.querySelectorAll('.form__group-correcto').forEach((icono)=>{
                icono.classList.remove('form__group-correcto');
            });
        }else{
            document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
        }
    });


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

AplicarAnimacion_Menu();
Enviar_Formulario();