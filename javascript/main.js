let favoritos = [];

class AFavoritos {
  constructor(id, imagen, titulo, sinopsis) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.sinopsis = sinopsis;
  }
}

//Registrar Usuarios//

class Usuarios {
  constructor(usuario, mail, contraseña) {
    this.usuario = usuario;
    this.mail = mail;
    this.contraseña = contraseña;
  }
}

let title = document.querySelector("title").textContent;
if (title === "HorrorFlix - Registrate es gratis!") {
  const UsuariosRegistrados = [];

  function registro() {
    let usuario = document.getElementById("usuario").value;
    let mail = document.getElementById("mail").value;
    let contraseña = document.getElementById("contraseña").value;

    const userReg = new Usuarios(usuario, mail, contraseña);

    if (usuario.value === "" || mail.value === "" || contraseña.value === "") {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal...",
        text: "Por favor completa todos los campos",
        confirmButtonColor: "#ba3232",
      });
      return false;
    } else if (contraseña.length < 5) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal...",
        text: "El password debe tener al menos 5 caracteres",
        confirmButtonColor: "#ba3232",
      });
      return false;
    } else {
      UsuariosRegistrados.push(userReg);

      localStorage.setItem("RegUsuarios", JSON.stringify(UsuariosRegistrados));

      alertExito();
    }
  }

  const btnReg = document.getElementById("reg");

  btnReg.addEventListener("click", (event) => {
    event.preventDefault();
    registro();
  });
}
function alertExito() {
  Swal.fire({
    title: "Registro Exitoso!",
    text: "Por favor inicie sesion",
    icon: "success",
    confirmButtonColor: "#ba3232",
    confirmButtonText: "Iniciar Sesion",
  }).then((result) => {
    window.location = "./assets/views/login.html";
  });
}

//Login//
if (title === "HorrorFlix - Login") {
  function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    const usuariosFromStorage = JSON.parse(localStorage.getItem("RegUsuarios"));

    console.log(usuariosFromStorage);

    user === usuariosFromStorage[0].usuario && password === usuariosFromStorage[0].contraseña ? alertExitoLogin(): alertErrorLogin();
  }

  const iniciarsession = document.getElementById("login");

  iniciarsession.addEventListener("click", (event) => {
    event.preventDefault();
    login();
  });
  console.log(document.querySelector("title"));
}

function alertExitoLogin() {
  Swal.fire({
    title: "Bienvenido! ",
    icon: "success",
    confirmButtonText: "Vamos!",
    confirmButtonColor: "#ba3232",
  }).then((result) => {
    window.location = "../views/principal.html";
  });
}
function alertErrorLogin() {
  Swal.fire({
    icon: "error",
    title: "Algo salió mal...",
    text: "Usuario y/o password incorrectos, intente nuevamente",
    confirmButtonColor: "#ba3232",
  });
}

//Mostrar Peliculas en pagina principal

cargarPelis();
function cargarPelis() {
  fetch("../../peliculas.json")
    .then((response) => response.json())
    .then((json) => mostrarEnPrincipal(json));
}
let divContainer = document.querySelector(".peliculasLista");

function mostrarEnPrincipal(arrayConPeliculas) {
  arrayConPeliculas.forEach((element) => {
    let divPelicula = document.createElement("div");

    divPelicula.classList = "cards_peliculas";

    divPelicula.innerHTML = `
            <picture>
                <img class="cards_peliculas_picture" src="${element.imagen}" alt="${element.id}">
            </picture>
            <div class="peliculas_content">
               <h3> ${element.titulo}</h3>
            </div>`;
    divContainer.appendChild(divPelicula);

    let favoritosLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if (favoritosLocalStorage) {
      favoritosLink(favoritosLocalStorage);
    }
   

    let buttonInfo = document.createElement("button");
    buttonInfo.innerHTML = "Ver Info";
    divPelicula.appendChild(buttonInfo);

    buttonInfo.addEventListener("click", () => {
      Swal.fire({
        icon: `info`,
        text: `${element.sinopsis}`,
        confirmButtonColor: "#ba3232",
        confirmButtonText: "Volver",
      })
    })

    let button = document.createElement("button");
    button.innerHTML = "Agregar a Favoritos";

    divPelicula.appendChild(button);

    button.addEventListener("click", () => {
      let getFavoritosStorage = JSON.parse(localStorage.getItem("favoritos"));

      if (getFavoritosStorage) {
        favoritos = getFavoritosStorage;
      }
      let id = element.id;
      let imagen = element.imagen;
      let titulo = element.titulo;
      let sinopsis = element.sinopsis;
      const pelicula = new AFavoritos(id, imagen, titulo, sinopsis);
      let index = favoritos.findIndex((element) => element.id === pelicula.id);

      if (index === -1) {
        const pelicula = new AFavoritos(id, imagen, titulo, sinopsis);
        favoritos.push(pelicula);
      }
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });

    button.addEventListener("click", () => {
      Toastify({
        text: "Añadido a favoritos!",
        duration: 2000,
        gravity: "top",
        position: "right",
        destination: "../views/principal.html",
        stopOnFocus: true,
        style: {
          background: "#ba3232",
          color: "white",
        },
      }).showToast();
    });
  });
}

