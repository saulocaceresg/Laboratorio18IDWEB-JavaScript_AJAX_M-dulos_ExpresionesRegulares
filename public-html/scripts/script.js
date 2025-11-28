// 3.	Usar fetch con promesas para leer datos de una API: crear una función cargarUsuario(), consultar al API jsonplaceholder sobre el usuario 10, convertir la respuesta a JSON y mostrar en consola el name, username y el email del usuario
console.log("+-----------------------------+\nEjercicio 1 (3.)\n\"Fetch con promesas\"");

function cargarUsuario() {   
    fetch ("https://jsonplaceholder.typicode.com/users/10")
    .then(respuesta => respuesta.json())
    .then(data => {
        // Carga los datos correspondientes
        console.log("Name:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);
    })
    .catch(error => console.error(error));
}

// cargarUsuario(); // Se llama a la función

// 4.	Usar fetch con async/await para leer datos de una API: crear una función cargarUsuario(), consultar al API jsonplaceholder sobre el usuario 10, convertir la respuesta a JSON y mostrar en consola el name, username y el email del usuario
console.log("+-----------------------------+\nEjercicio 2 (4.)\n\"Fetch con async/await\"");

async function cargarUsuario2() {
    try {
        const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users/10"); // se vincula con el API

        // Para atrapar un error en el url
        if (!respuesta.ok) {
            throw new Error ("HTTP ERROR:", respuesta.status);
        }

        const data = await respuesta.json(); // Se convierte a JSON
        console.log("Datos:\nName:", data.name, "\nUsername:", data.username, "\nEmail:", data.email); // Se imprime
    } catch (e) {
        console.error("Error:", e);
    }
}

// cargarUsuario2();

// 5.	Manipular arreglos devueltos por AJAX: consultar todos los usuarios del API jsonplaceholder, mostrar en consola sólo los nombres de los usuarios. Usa un forEach para mostrarlos. Usar fetch con promesas
console.log("+-----------------------------+\nEjercicio 3 (5.)\n\"Arreglos y AJAX\"");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json()) // Se convierte a json
    .then(data => {
        data.forEach((i) => { // foreach para recorrer los usuarios
            console.log(i.name); // Se imprime el nombre
        });
    })
    .catch(error => console.log(error));