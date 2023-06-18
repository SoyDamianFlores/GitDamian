
var recetas = [];

var ingredientesDisponibles = [];

// me hacia mucha ilusion hacer un boton principal con una bienvenida :D
function menu() {

    output("Hola y Bienvenido a mi proyecto! Por ser algo principiante en el area <br> te pido por favor uses los botones con mucho cariño para que nada se rompa; <br>si, si se que debe ser mas robusto y soportar cualquier tipo de funcionalidad <br>pero creeme que me estoy esforzando al maximo :D")
    var html = `<button onclick="mostrarBotones()">Mostrar Menú</button>`;
    output('<br>');
    output('<br>');
    output(html);
}


// Agreguen sus ingredientes, Agreguen sus recetas , verifiquen sus ingredientes
// y recetas y luego denle "Encontrar Receta"
// usen todo con cariño por favor, hay laburo detras de esto :D
function mostrarBotones() {
    var html = `
        <button onclick="agregarIngredienteDisponible()">Agregar Ingrediente</button>
        <button onclick="crearNuevaReceta()">Crear Nueva Receta</button>
        <button onclick="encontrarReceta()">Encontrar Receta</button>
        <br>
        <br>
        <button onclick="recetario()">Ver Recetas</button>
        <button onclick="misingredientes()">Ver Ingredientes Disponibles</button>
    `;
    output(html);
    // mostrar menu:
    // boton de agregar ingredientes disponbiles
    // boton de encontrar receta
    // boton de crear nueuva receta
}
menu();

// pide al usuario el ingrediente y lo agrega a la lista
function agregarIngredienteDisponible() {
    var ingrediente; 
    while (ingrediente = input("Agregue Sus Ingredientes Uno Por Uno Por Favor y precione cancelar cuando finalize :D")){
    ingredientesDisponibles.push([ingrediente]);    
    }
}

// funcion de la cual me siento orgulloso porque es la mas jodida para mi

function encontrarReceta() {
    clear();

    for (var i = 0; i < recetas.length; i++) {
        var recetaDisponible = true;

        for (var j = 0; j < recetas[i]['ingredientes'].length; j++) {
            var ingredienteEncontrado = false;

            for (var k = 0; k < ingredientesDisponibles.length; k++) {
                if (recetas[i]['ingredientes'][j] == ingredientesDisponibles[k]) {
                    ingredienteEncontrado = true;
                    break;
                }
            }

            if (!ingredienteEncontrado) {
                recetaDisponible = false;
                break;
            }
        }

        if (recetaDisponible) {
            output("Podes Preparar La Siguiente Receta: " + recetas[i]['nombre']);
            output("<br>");
            output("<br>");
        }   
    }

    output("<br>");
    output(`<button onclick="volveralmenu()">Volver al Menú</button>`)
}


//funcion para almacenar las recetas de la nona.

function crearNuevaReceta() {
    var nombre = input("Nombre de la Receta");
    var ingredientes2= [];
    var ingrediente;
    
    while (ingrediente = input("Ingrese un ingrediente o presione cancelar para finalizar")) {
        ingredientes2.push(ingrediente);
    }
    
    var preparacion = input("Preparación de la Receta");
   
    var nuevaReceta = {
        nombre: nombre,
        ingredientes: ingredientes2,
        preparacion: preparacion
    };
    
    recetas.push(nuevaReceta);
    
    alert("Se Creó La Receta: " + nuevaReceta.nombre);
}

// funcion para ver las recetas de la nona
function recetario(){
    clear();
    
    for (var i = 0; i < recetas.length; i++){
        output("Nombre: " + recetas[i]['nombre'] + " " + "<br>Ingredientes: " + recetas[i]['ingredientes'] + " " + "<br>Preparacion: " + recetas[i]['preparacion']);
        output("<br>")
        output("<br>")
    }
    output("<br>");
    output(`<button onclick="volveralmenu()">Volver al Menú</button>`)
}


// funcion para ver los ingredientes despues de venir de la feria 
function misingredientes(){
    clear();
    for(var i = 0; i < ingredientesDisponibles.length; i++){
        output('<br>');
        output(ingredientesDisponibles[i]);
        
    
    }
    output('<br>');
    output(`<button onclick="volveralmenu()">Volver al Menú</button>`)
}

//funcion pequeña pero que ayuda un monton
function volveralmenu()
{
    clear();
    mostrarBotones();
}
