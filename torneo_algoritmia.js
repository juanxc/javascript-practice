// 1. Desencriptando el mensaje secreto.
// Crea una function que desencripte un mensaje secreto. El mensaje está encriptado cambiando cada letra por la siguiente en el alfabeto.
// (Z se convierte en A ) y así sucesivamente)

function desencriptarMensaje(mensaje) {
    const arr_mensaje = mensaje.split('');
    const arr_mensaje_desencriptado = arr_mensaje.map(function(car_mensaje){
        let code_car_mensaje = car_mensaje.charCodeAt(0);
        let new_car_mensaje = car_mensaje;
        //mayusculas
        if(code_car_mensaje>=65 && code_car_mensaje<=90){
            new_car_mensaje = code_car_mensaje == 90 ? String.fromCharCode(65) : String.fromCharCode(code_car_mensaje + 1);
        }
        //minusculas
        else if(code_car_mensaje>=97 && code_car_mensaje<=122){
            new_car_mensaje = code_car_mensaje == 122 ? String.fromCharCode(97) : String.fromCharCode(code_car_mensaje + 1);
        }
        return new_car_mensaje;
    });
    return arr_mensaje_desencriptado.join('');
}

console.log(desencriptarMensaje("itmhnq dk ptd kdd"));

// 2. Genera nombres de super héroes
// Crea una función que genere un nombre de super héroe combinando una palabra de un array de adjetivos y una palabra de un array de sustantivos.

const adjetivos = ["Guapo", "Poderoso", "Asombroso", "Muy Hermoso"];
const sustantivos = ["Junior", "Bigotón", "Arquitecto", "Maestro"];

function getRandomElementFromArray(arrayInput){
    return arrayInput[Math.floor(Math.random() * arrayInput.length)];
}

function generadorDeSuperHéroes() {
    let un_adjetivo = getRandomElementFromArray(adjetivos);
    let un_sustantivo = getRandomElementFromArray(sustantivos);
    return `${un_adjetivo} ${un_sustantivo}`;
}

console.log(generadorDeSuperHéroes());

// 3. Genera historias aleatorias
// Escribe una función que genere una historia aleatoria usando arrays de sujetos, verbos y objetos.

const sujetos = [
  "El gato",
  "Un pirata",
  "La abuela",
  "Un marciano",
  "El plomero",
  "El Joer",
];

const verbos = ["se comió", "perdió", "inventó", "rompió", "encontró"];

const objetos = [
  "una empanada",
  "un zapato",
  "una lámpara",
  "un hámster",
  "un pastel",
];

function crearHistoriaRidicula() {
    const un_sujeto = getRandomElementFromArray(sujetos);
    const un_verbo = getRandomElementFromArray(verbos);
    const un_objeto = getRandomElementFromArray(objetos);
    return `${un_sujeto} ${un_verbo} ${un_objeto}`;
}

console.log(crearHistoriaRidicula());

// 4. Generador de contraseñas
// Escribe una function que genere una contraseña segura de 12 caracteres combinando letras, mayúsculas, minúsculas, símbolos y números.
const chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+{}[]|;':\"<>?,./";

function generarContrasena() {
    const letras_minusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letras_mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numeros = '0123456789'.split('');
    const simbolos = "!@#$%^&*()_-=+{}[]|;':\"<>?,./".split('');
    const tipoCaracteres = [letras_minusculas, letras_mayusculas, numeros, simbolos];
    let contrasena = getRandomElementFromArray(letras_minusculas) + getRandomElementFromArray(letras_mayusculas) + getRandomElementFromArray(numeros) + getRandomElementFromArray(simbolos);
    while(contrasena.length<12){
        contrasena += getRandomElementFromArray(getRandomElementFromArray(tipoCaracteres)); 
    }
    contrasena = contrasena.split('').sort(()=> Math.random() - 0.5).join('');
    return contrasena;
};

console.log(generarContrasena());

// 5. Conversor de Texto a Emoji
// Escribe una función que convierta palábras específicas de un texto a emojis. El texto debe ser un string y el resultado debe ser ese string pero con los caracteres específicos transformados en emojis.

const mapaEmojis = {
  feliz: "😊",
  triste: "😢",
  amor: "❤️",
  enojado: "😠",
  sorprendido: "😲",
};

function textoAEmoji(texto) {
    const arr_texto = texto.split(' ');
    const new_arr_texto = arr_texto.map((arr_element) => {
        let palabra_emoji = arr_element;
        if(Object.keys(mapaEmojis).includes(arr_element.toLowerCase())){
            palabra_emoji = mapaEmojis[arr_element.toLowerCase()];
        }
        return palabra_emoji;
    });
    return new_arr_texto.join(' ');
}

console.log(textoAEmoji("Feliz amor triste enojado sorprendido"));