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

cargarUsuario(); // Se llama a la función