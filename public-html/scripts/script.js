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

function mostrarNombres() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json()) // Se convierte a json
    .then(data => {
        data.forEach((i) => { // foreach para recorrer los usuarios
            console.log(i.name); // Se imprime el nombre
        });
    })
    .catch(error => console.log(error));
}

// mostrarNombres();

// 6.	Manipular arreglos devueltos por AJAX: consultar todos los usuarios del API jsonplaceholder, mostrar en consola sólo los nombres de los usuarios. Usa un forEach para mostrarlos. Usar fetch con async/await
console.log("+-----------------------------+\nEjercicio 4 (6.)\n\"Recorrer nombres con async/await\"");

async function mostrarNombres2() {
    try {
        const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users");
        
        // Para atrapar un error en el url
        if (!respuesta.ok) {
            throw new Error ("HTTP ERROR:", respuesta.status);
        }

        const data = await respuesta.json();
        // forEach para recorrer arrglo de usuarios
        data.forEach(i => {
            console.log("Name: " + i.name);
        });
    } catch (e) {
        console.error("Error:", e);
    }
}

// mostrarNombres2();

// 7.	Actualizar el DOM usando datos obtenidos por AJAX: crear un botón en HTML que diga: "Cargar usuario", cuando el usuario haga click en el botón obtener los datos del usuario 2, mostrar en el HTML nombre, email, ciudad (address.city).
// Usar fetch con promesas
console.log("+-----------------------------+\nEjercicio 5 (7.)\n\"AJAX y DOM\"");

let boton = document.getElementById("btn-ej5");

// Evento para el botón
boton.addEventListener("click", (e) => {
    
    e.preventDefault();

    // Se crea la etiqueta que llevará la info
    let p = document.createElement("pre");
    p.style.fontFamily = "Times";

    fetch("https://jsonplaceholder.typicode.com/users/2") // fetch con promesas
        .then(response => response.json())
        .then(data => {
            // Se imprime en consola
            console.log("Nombre: " + data.name);
            console.log("Email: " + data.email);
            console.log("Ciudad: " + data.address.city);
            p.textContent = "Nombre: " + data.name + "\nEmail: " + data.email + "\nCiudad: " + data.address.city;
            document.querySelector("#btn-ej5").after(p); // Se inserta la etiqueta
        })
        .catch(error => console.error(error));

});

// 8.	Actualizar el DOM usando datos obtenidos por AJAX: crear un botón en HTML que diga: "Cargar usuario", cuando el usuario haga click en el botón obtener los datos del usuario 2, mostrar en el HTML nombre, email, ciudad (address.city).
// Usar fetch con async/await
console.log("+-----------------------------+\nEjercicio 6 (8.)\n\"AJAX y DOM (fetch con async/await)\"");

let boton2 = document.getElementById("btn-ej6");

boton2.addEventListener("click", (e) => {

    e.preventDefault();

    // Se crea la etiqueta que llevará la info
    let p = document.createElement("pre");
    p.style.fontFamily = "Times";

    async function cargarUsuario() {   
        try {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users/2");
                    
            // Para atrapar un error en el url
            if (!response.ok) {
                throw new Error ("HTTP ERROR:", response.status);
            }

            const data = await response.json();
            // Se imprime en consola
            console.log("Nombre: " + data.name);
            console.log("Email: " + data.email);
            console.log("Ciudad: " + data.address.city);
            p.textContent = "Nombre: " + data.name + "\nEmail: " + data.email + "\nCiudad: " + data.address.city;
            document.querySelector("#btn-ej6").after(p); // Se inserta la etiqueta
        
        } catch (e) {
            console.error("Error: " + e);
        }
    }

    cargarUsuario();

});

// 9.	Crear un sistema modular con 2 archivos de operaciones matemáticas, y un archivo principal que las use.
// Crear el archivo sumaResta.js que debe contener exportaciones nombradas para sumar y restar 2 números.
// Crear el archivo multiplicacionDivision.js que debe contener una exportación por defecto multiplicar y una exportación nombrada dividir para 2 números.
// Si b es 0, debe lanzar un error ("No se puede dividir entre cero");
// Crear el archivo app.js que debe importar la exportación por defecto de multiplicacionDivision.js e importar las exportaciones nombradas de los otros 2 archivos.
// Luego debe ejecutar las 4 operaciones y mostrar resultados. Si dividir lanza un error, captúralo en un try/catch y muestra Error en división: “mensaje”.
// console.log("+-----------------------------+\nEjercicio 7 (9.)\n\"Sistema modular ()\"");

// export 


// 10.	Crea un HTML que cargue app.js

// 11.	Crear la expresión regular para validar una contraseña fuerte Regla: mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
console.log("+-----------------------------+\nEjercicio 9 (11.)\n\"Expresiones regulares (comprobar contraseña)\"");

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
const passwordDebil = "123asssd";
const passwordFuerte = "123asssS";
console.log("Contraseña: " + passwordDebil);
console.log(regex.test(passwordDebil) ? "Contraseña Fuerte" : "Contraseña débil");

console.log("Contraseña: " + passwordFuerte);
console.log(regex.test(passwordFuerte) ? "Contraseña Fuerte" : "Contraseña débil");

// 12.	Crear la expresión regular para encontrar direcciones URL seguras en un texto
console.log("+-----------------------------+\nEjercicio 10 (12.)\n\"Expresiones regulares (comprobar url)\"");

const url = "Visita https://google.com para buscar cualquier cosa. No visites a http://pagina.com. Visita https://youtube.com para ver videos.";
const regexURL = /https:\/\/[A-Za-z0-9\-]+\.[A-Za-z]{2,}/g; // Encuentra https://_____.___

console.log("URL: " + url.match(regexURL));

