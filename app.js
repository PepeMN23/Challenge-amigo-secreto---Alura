// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Función para agregar amigos a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Eliminamos espacios en blanco

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre a la lista si no está repetido
    if (!listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        
        // Crear un nuevo elemento <li> para la lista de amigos
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        ulListaAmigos.appendChild(nuevoElemento);
    } else {
        alert('Este nombre ya está en la lista.');
    }

    // Limpiar el input después de agregar
    inputAmigo.value = '';
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay nombres en la lista. Agrega al menos uno.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[randomIndex];

    // Limpiar resultado anterior y mostrar nuevo
    ulResultado.innerHTML = ''; 
    const resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = `El amigo secreto es: ${amigoSecreto}`;
    ulResultado.appendChild(resultadoElemento);
}
