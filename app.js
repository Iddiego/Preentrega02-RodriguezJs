//Definición de la Clase "RutinaDeGym"

let dia = prompt ("Buscar Día");
let repeticiones = prompt ("Buscar Repeticiones");
let ejercicio01 = prompt ("Buscar Ejercicio 01");
let ejercicio02 = prompt ("Buscar Ejercicio 02");
let ejercicio03 = prompt ("Buscar Ejercicio03");
let ejercicio04 = prompt ("Buscar Ejercicio04");


const rutinaDeGym = {
    rutinaDelDia: dia,
    repeticiones: repeticiones,
    ejercicio01: ejercicio01,
    ejercicio02: ejercicio02,
    ejercicio03: ejercicio03,
    ejercicio04: ejercicio04,
  
}


// Funciones 

function rutinas(ejercicios){
    ejercicios.forEach(ejercicios => {
        console.log(ejercicios.repeticiones + " Repeteciones - " + ejercicios.ejercicio01 + " - Haz rangos completos de movimiento - " + ejercicios.ejercicio02 + " - " + ejercicios.ejercicio03 + " - " + ejercicios.ejercicio04)

        document.write("<p>" + ejercicios.repeticiones + " Repeteciones - " + ejercicios.ejercicio01 + " - Haz rangos completos de movimiento - " + ejercicios.ejercicio02 + " - " + ejercicios.ejercicio03 + " - " + ejercicios.ejercicio04 + "</p>")


    });
}


function noResultados(ejercicios){
    console.log("No pain - No Gain")
    document.write("<p style='color:white'> NO PAIN NO GAIN</p>")
}


function filtrarDia(ejercicios){
    if(rutinaDeGym.rutinaDelDia){
        return ejercicios.rutinaDelDia == rutinaDeGym.rutinaDelDia
    }
    return ejercicios;

}


function filtrarReps(ejercicios){
    if(rutinaDeGym.reps){
        return ejercicios.reps >= rutinaDeGym.reps
    }
    return ejercicios;

}

function filtrarRepsMax(ejercicios){
    if(rutinaDeGym.repsMax){
        return ejercicios.repsMax <= rutinaDeGym.repsMax
    }
    return ejercicios;

}

function filtrarEjercicio01(ejercicios){
    if(rutinaDeGym.ejercicio01){
        return ejercicios.ejercicio01 == rutinaDeGym.ejercicio01
    }
    return ejercicios;

}

function filtrarEjercicio02(ejercicios){
    if(rutinaDeGym.ejercicio02){
        return ejercicios.ejercicio02 == rutinaDeGym.ejercicio02
    }
    return ejercicios;

}

function filtrarEjercicio03(ejercicios){
    if(rutinaDeGym.ejercicio03){
        return ejercicios.ejercicio03 == rutinaDeGym.ejercicio03
    }
    return ejercicios;

}

function filtrarEjercicio04(ejercicios){
    if(rutinaDeGym.ejercicio04){
        return ejercicios.ejercicio04 == rutinaDeGym.ejercicio04
    }
    return ejercicios;

}


//Funcion Filtrar Rutina

function filtrarRutina(){
    let motivacion = ejercicios.filter(filtrarDia).filter(filtrarRepsMax).filter(filtrarReps).filter(filtrarEjercicio01).filter(filtrarEjercicio02).filter(filtrarEjercicio03).filter(filtrarEjercicio04)
    console.log(motivacion.length)
    if (motivacion.length){
        rutinas(motivacion)
    }else{
       noResultados();
    }
}


filtrarRutina();
